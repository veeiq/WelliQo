const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
  console.error("Usage: node convert_webp.js <input> <output>");
  process.exit(1);
}

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(() => {
    console.log(`Successfully converted ${inputPath} to ${outputPath}`);
    // Delete the original safely
    fs.unlinkSync(inputPath);
    console.log(`Deleted original: ${inputPath}`);
  })
  .catch(err => {
    console.error("Error converting image:", err);
    process.exit(1);
  });
