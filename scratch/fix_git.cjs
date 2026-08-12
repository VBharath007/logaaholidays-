const fs = require('fs');
const path = require('path');

const packageDetailsPath = path.join(__dirname, '..', 'src', 'pages', 'PackageDetails.tsx');

let content = fs.readFileSync(packageDetailsPath, 'utf8');

// The file was originally UTF-8.
// A tool read it as Windows-1252 and saved it as UTF-8.
// To fix it, we convert the string back to Windows-1252 bytes (using latin1 as an approximation, or windows-1252),
// and then parse those bytes as UTF-8.

// In Node.js, we can simulate this by encoding to 'binary' (which maps 0-255 characters to bytes) 
// and then decoding from 'utf8'. However, some Windows-1252 characters (like '€') don't map perfectly 
// to Latin1. But let's try a simple Buffer conversion first.

function recoverMojibake(text) {
    try {
        // Convert the broken string to latin1 bytes. If the string contains any character > 255, it will be truncated,
        // but mojibake usually only contains characters <= 255 if it was read as latin1.
        // Wait, Windows-1252 has some characters > 255, like '€' (0x20AC), '”' (0x201D).
        // Let's use iconv-lite if available, otherwise write a custom mapper.
        
        // Custom Windows-1252 to byte mapper:
        const win1252 = {
            0x20AC: 0x80, 0x201A: 0x82, 0x0192: 0x83, 0x201E: 0x84, 0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87,
            0x02C6: 0x88, 0x2030: 0x89, 0x0160: 0x8A, 0x2039: 0x8B, 0x0152: 0x8C, 0x017D: 0x8E, 0x2018: 0x91,
            0x2019: 0x92, 0x201C: 0x93, 0x201D: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97, 0x02DC: 0x98,
            0x2122: 0x99, 0x0161: 0x9A, 0x203A: 0x9B, 0x0153: 0x9C, 0x017E: 0x9E, 0x0178: 0x9F
        };

        const bytes = [];
        for (let i = 0; i < text.length; i++) {
            let code = text.charCodeAt(i);
            if (code > 255) {
                if (win1252[code] !== undefined) {
                    bytes.push(win1252[code]);
                } else {
                    // This character was NOT part of the mojibake corruption. 
                    // This means the file contains a mix of corrupted and uncorrupted text!
                    // This happens because the script only corrupted some parts or we added new text after.
                    return null; 
                }
            } else {
                bytes.push(code);
            }
        }
        return Buffer.from(bytes).toString('utf8');
    } catch (e) {
        return null;
    }
}

// Since the file contains newly added text (like 9004, 9101, 9102) which are perfectly valid UTF-8,
// doing a global conversion will DESTROY the perfectly valid text!
// So we must only replace the mojibake. 
// We will do this line by line. If a line can be successfully recovered AND it's different, we replace it.
// Actually, even valid text might be "recovered" into garbage if it happens to be valid Latin-1.
// Let's use a safer approach: checkout the file from git!

