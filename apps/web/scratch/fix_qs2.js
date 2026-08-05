const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

// replace { id: 'some_id', label: 'Some Label' } with { id: 'some_id', label: 'Some Label', value: 'some_id' }
content = content.replace(/{\s*id:\s*'([^']+)',\s*label:\s*'([^']+)'\s*}/g, "{ id: '$1', label: '$2', value: '$1' }");

fs.writeFileSync(path, content);
console.log('Fixed questions.ts');
