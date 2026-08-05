const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/'single-choice'/g, "'single_choice'");
content = content.replace(/text: '/g, "label: '");
content = content.replace(/text: `/g, "label: `");

fs.writeFileSync(path, content);
console.log('Fixed questions.ts');
