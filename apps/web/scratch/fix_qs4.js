const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

// The options lines have format: { id: '...', section: 'Build Muscle & Tone', label: '...', value: '...' }
// We want to remove `, section: 'Build Muscle & Tone'` from those lines only.
// Let's just remove it if it occurs after an open bracket that is indented multiple times.
// Actually, options look like: `      { id: 'never', section: 'Build Muscle & Tone', label: 'Never', value: 'never' },`
// While the main question is: `  {`
// `    id: 'strength_training_days',`
// `    section: 'Build Muscle & Tone',`
// Wait, my previous replacement added it right after the `id:` in the same line.
// But the main question is formatted on multiple lines:
//   {
//     id: 'strength_training_days',
//     label: '...'
// So `{\s*id:\s*'([^']+)',` matched BOTH if they were on one line or multiple lines.
// Let's just remove `section: 'Build Muscle & Tone', ` from lines that contain `value: ` because only options have `value:`.
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('value:')) {
        lines[i] = lines[i].replace(/section: 'Build Muscle & Tone', /, '');
    }
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed questions.ts section again');
