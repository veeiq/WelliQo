const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

// replace { id: 'some_id' with { id: 'some_id', section: 'Build Muscle & Tone',
content = content.replace(/{\s*id:\s*'([^']+)',/g, "{ id: '$1', section: 'Build Muscle & Tone',");

fs.writeFileSync(path, content);
console.log('Fixed questions.ts section');
