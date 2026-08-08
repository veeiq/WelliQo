const fs = require('fs');
const path = require('path');

const [,, src, dest] = process.argv;

if (!src || !dest) {
  console.error('Usage: node convert_webp.js <src> <dest>');
  process.exit(1);
}

const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

try {
  const sharp = require('sharp');
  sharp(src)
    .webp({ quality: 80 })
    .toFile(dest)
    .then(() => {
      console.log(`Converted ${src} to ${dest}`);
    })
    .catch(err => {
      console.error('Error with sharp:', err);
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} to ${dest} as fallback`);
    });
} catch (e) {
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest} as fallback (sharp not found)`);
}
