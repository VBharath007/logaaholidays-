const fs = require('fs');

const text = fs.readFileSync('FAQ_Tour_Packages.txt', 'utf8');
const blocks = text.split(/\s+Q\d+\.\s+/).slice(1);

const faqs = [];
for (const block of blocks) {
    const lines = block.trim().split('\n').map(l => l.trim());
    if (lines.length < 3) continue;
    
    const q_en = lines[0];
    const q_ta = lines[1].replace(/\*\*/g, '').trim();
    const q_hi = lines[2].replace(/\*\*/g, '').trim();
    
    let a_en_start = lines.findIndex(l => l.startsWith('A.  '));
    let a_en_lines = [];
    if (a_en_start !== -1) {
        for (let i = a_en_start; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith('**A.** ஆம்') || line.startsWith('**A.** நிச்சயமாக') || line.startsWith('**A.** இதன்')) break;
            if (line && !line.startsWith('- - - -')) {
                a_en_lines.push(line);
            }
        }
    }
    const a_en = a_en_lines.join(' ').replace('A.  ', '').trim();
    
    let a_ta = "";
    let a_hi = "";
    let ans_ta_idx = lines.findIndex((l, i) => i > a_en_start && l.startsWith('**A.** '));
    if (ans_ta_idx !== -1) {
        a_ta = lines[ans_ta_idx].replace('**A.** ', '').trim();
        if (ans_ta_idx + 1 < lines.length && lines[ans_ta_idx + 1].startsWith('**A.** ')) {
            a_hi = lines[ans_ta_idx + 1].replace('**A.** ', '').trim();
        }
    }
    
    // In case the heuristics above didn't find Hindi correctly
    for(const line of lines) {
        if(line.startsWith('**A.** ') && (line.includes('हाँ') || line.includes('बिल्कुल') || line.includes('अर्थ'))) {
            a_hi = line.replace('**A.** ', '').trim();
        }
    }

    faqs.push({ q_en, q_ta, q_hi, a_en, a_ta, a_hi });
}

let code = fs.readFileSync('src/pages/PackageDetails.tsx', 'utf8');
let replacedCount = 0;

for (const faq of faqs) {
    // Escape string for regex
    const qEscaped = faq.q_en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Find the object
    const regex = new RegExp(`\\{\\s*"question"\\s*:\\s*"${qEscaped}"\\s*,[\\s\\S]*?\\}`, 'g');
    
    const matches = code.match(regex);
    if (matches && matches.length > 0) {
        // Escape quotes and backslashes for JS strings
        const escapeJs = str => str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        
        const newObj = `{
                "question": "${escapeJs(faq.q_en)}",
                "questionTamil": "${escapeJs(faq.q_ta)}",
                "questionHindi": "${escapeJs(faq.q_hi)}",
                "answer": "${escapeJs(faq.a_en)}",
                "answerTamil": "${escapeJs(faq.a_ta)}",
                "answerHindi": "${escapeJs(faq.a_hi)}"
            }`;
            
        code = code.replace(regex, newObj);
        replacedCount += matches.length;
    }
}

fs.writeFileSync('src/pages/PackageDetails.tsx', code, 'utf8');
console.log(`Successfully replaced ${replacedCount} FAQ objects with Hindi text!`);
