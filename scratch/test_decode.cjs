const str1 = 'â€“';
const str2 = 'âœ…';
const str3 = 'âœ”ï¸\x8F';

console.log(Buffer.from(str1, 'latin1').toString('utf8'));
console.log(Buffer.from(str2, 'latin1').toString('utf8'));
console.log(Buffer.from(str3, 'latin1').toString('utf8'));
