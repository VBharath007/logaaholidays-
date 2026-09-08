const fs = require('fs');

const win1252ToUnicode = {
    0x80: 0x20AC, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E, 0x85: 0x2026,
    0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160,
    0x8B: 0x2039, 0x8C: 0x0152, 0x8E: 0x017D, 0x91: 0x2018, 0x92: 0x2019,
    0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
    0x98: 0x02DC, 0x99: 0x2122, 0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153,
    0x9E: 0x017E, 0x9F: 0x0178
};

const unicodeToWin1252 = {};
for (let [k, v] of Object.entries(win1252ToUnicode)) {
    unicodeToWin1252[v] = parseInt(k);
}

function restoreMojibake(text) {
    // Mojibake in UTF-8 looks like a sequence of UTF-8 encoded bytes that were meant to be Win-1252.
    // e.g. UTF-8 encoded "✈" -> [0xE2, 0x9C, 0x88].
    // Read as Win-1252: 0xE2 = 'â', 0x9C = 'œ', 0x88 = 'ˆ' -> "âœˆ".
    
    // We want to find such sequences and convert them back.
    // A corrupted character sequence will look like 'â' (U+00E2) followed by other characters.
    // Let's use a regex to find them. UTF-8 multi-byte characters start with a byte >= 0xC2.
    // So in Win-1252, this is a character with charCode >= 0xC2.
    // Specially, 'â' (0xE2), 'Ã' (0xC3), 'ð' (0xF0).
    
    // But since the file is large, we can just map the whole file string to its Windows-1252 bytes,
    // and then parse it as UTF-8.
    
    // Convert string to bytes
    const bytes = [];
    let isCorrupted = false;
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        if (code > 255) {
            if (unicodeToWin1252[code]) {
                bytes.push(unicodeToWin1252[code]);
                isCorrupted = true;
            } else {
                // Not a Win-1252 mapping, this means this is valid UTF-8!
                return null;
            }
        } else {
            bytes.push(code);
            if (code >= 0x80) isCorrupted = true; // High ASCII means it was part of mojibake
        }
    }
    
    if (!isCorrupted) return text;
    
    // Try to decode bytes as UTF-8
    try {
        const decoded = Buffer.from(bytes).toString('utf8');
        // Check if decoding actually produced valid unicode.
        if (decoded.includes('\uFFFD')) {
            return null; // Invalid UTF-8 sequence produced
        }
        return decoded;
    } catch(e) {
        return null;
    }
}

const file = 'src/pages/PackageDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

// We will split the file by lines, and for each line we try to restore mojibake substrings.
// A mojibake substring usually starts with Ã (C3) or â (E2) or ð (F0)
const mojibakeRegex = /([Ãâð][\x80-\xFF\u0152\u0153\u0160\u0161\u0178\u017D\u017E\u0192\u02C6\u02DC\u2013\u2014\u2018-\u201E\u2020-\u2022\u2026\u2030\u2039\u203A\u20AC\u2122]+)/g;

let changedCount = 0;
let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // Special fast path
    if (!line.match(/[Ãâð]/)) continue;
    
    let newLine = line.replace(mojibakeRegex, (match) => {
        let restored = restoreMojibake(match);
        if (restored) {
            changedCount++;
            return restored;
        }
        return match;
    });
    lines[i] = newLine;
}

// Write the file back
fs.writeFileSync(file, lines.join('\n'), 'utf8');
console.log('Fixed ' + changedCount + ' mojibake instances!');
