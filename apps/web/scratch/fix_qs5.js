const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Clean out all sections just in case
content = content.replace(/,\s*section:\s*'[^']+'/g, '');
content = content.replace(/section:\s*'[^']+',\s*/g, '');

// 2. Add section: 'Build Muscle & Tone', safely to main question body.
// Every question has `type: 'single_choice',`.
content = content.replace(/type:\s*'single_choice',/g, "type: 'single_choice',\n    section: 'Build Muscle & Tone',");

fs.writeFileSync(path, content);
console.log('Fixed questions.ts');
