import fs from 'fs';
import path from 'path';
import { compileContent } from '../src/compiler';
import { ContentAdapter } from '../src/adapter';

function run() {
  const dataDir = path.resolve(__dirname, '../data');
  const distDir = path.resolve(__dirname, '../dist');
  console.log(`Compiling content from: ${dataDir}`);

  try {
    const { index, manifest, searchIndex } = compileContent(dataDir);

    // Ensure dist directory exists
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    // Write Compiled Content Index
    const indexPath = path.join(distDir, 'index.json');
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), 'utf8');

    // Write Search Index
    const searchIndexPath = path.join(distDir, 'search-index.json');
    fs.writeFileSync(searchIndexPath, JSON.stringify(searchIndex, null, 2), 'utf8');

    // Write Manifest
    const manifestPath = path.join(distDir, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

    console.log('\n✅ Compilation Successful!');
    console.log(`- Wrote ${indexPath}`);
    console.log(`- Wrote ${searchIndexPath}`);
    console.log(`- Wrote ${manifestPath}`);
    console.log('\n--- Content Manifest ---');
    console.log(JSON.stringify(manifest, null, 2));

    // Test the adapter
    const adapter = new ContentAdapter(index);
    const hub = adapter.buildActionHub('guide-morning-energy');
    console.log('\n--- Action Hub for "guide-morning-energy" ---');
    console.log(JSON.stringify(hub, null, 2));
  } catch (error) {
    console.error('\n❌ Compilation Failed!');
    console.error(error);
    process.exit(1);
  }
}

run();
