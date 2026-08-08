const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const dir = 'src/data/content/mdx';

const walk = (d) => {
  if (!fs.existsSync(d)) return;
  fs.readdirSync(d).forEach(f => {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.mdx')) {
      const { data, content } = matter.read(p);
      // We keep the original Protein one, but for all others created in this batch, we delete the thumbnail to fallback to beautiful topic images.
      if (data.thumbnail && data.thumbnail !== '/images/articles/protein_01.webp') {
        delete data.thumbnail;
        fs.writeFileSync(p, matter.stringify(content, data));
        console.log('Removed thumbnail from: ' + p);
      }
    }
  });
};

walk(dir);
console.log('Done cleaning thumbnails.');
