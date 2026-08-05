const fs = require('fs');

const path = 'src/assessments/build-muscle-tone/questions.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove ALL 'section: 'Build Muscle & Tone', ' from the file to clean it up.
content = content.replace(/section:\s*'Build Muscle & Tone',\s*/g, '');

// 2. Add 'section: 'Build Muscle & Tone',' back to the main question objects.
// Main question objects start with `  {\n    id: '`
content = content.replace(/  \{\n    id: '([^']+)',/g, "  {\n    id: '$1',\n    section: 'Build Muscle & Tone',");

// 3. Fix missing `value:` in options.
// Find any option like `{ id: '...', label: "..." }` or `{ id: '...', label: '...' }`
// The regex below matches anything until the closing brace that does NOT contain `value:`
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('{ id: ') && line.includes('label: ') && !line.includes('value:')) {
        // Extract the id
        const match = line.match(/id:\s*'([^']+)'/);
        if (match) {
            const id = match[1];
            // Insert value before the closing brace
            lines[i] = line.replace(/ }$/, `, value: '${id}' }`);
            lines[i] = lines[i].replace(/ },$/, `, value: '${id}' },`);
        }
    }
}

fs.writeFileSync(path, lines.join('\n'));
console.log('Fixed questions.ts properly');
