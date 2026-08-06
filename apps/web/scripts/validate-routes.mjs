import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appDir = path.resolve(__dirname, '../src/app');

// Hardcoded for the script context since we cannot easily import the TS registry here without ts-node/bundling
const REQUIRED_ROUTES = [
  { url: '/assessment', component: 'Assessment Client' },
  { url: '/report', component: 'Report Dashboard' },
  { url: '/assessments', component: 'Assessment Directory' },
  { url: '/dashboard', component: 'User Dashboard' }
];

console.log('🔍 Validating Application Routes...\n');

let hasError = false;

// Helper to check if a route exists in any of the route groups or directly
function checkRouteExists(routePath) {
  // Strip leading slash
  const cleanRoute = routePath.replace(/^\//, '');
  
  // Standard case: directly inside app folder, or inside a nested folder
  const standardPath = path.join(appDir, cleanRoute, 'page.tsx');
  if (fs.existsSync(standardPath)) return true;

  // Search inside Route Groups (folders in parentheses like (assessment), (dashboard))
  try {
    const routeGroups = fs.readdirSync(appDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('(') && dirent.name.endsWith(')'))
      .map(dirent => dirent.name);

    for (const group of routeGroups) {
      const groupedPath = path.join(appDir, group, cleanRoute, 'page.tsx');
      if (fs.existsSync(groupedPath)) return true;
    }
  } catch (err) {
    console.error('Error reading app directory:', err.message);
  }

  return false;
}

for (const route of REQUIRED_ROUTES) {
  // Special case handling for dynamic routes or queries like /assessment?id=...
  const basePath = route.url.split('?')[0]; 
  
  const exists = checkRouteExists(basePath);
  
  if (exists) {
    console.log(`✅ ${route.url.padEnd(25)} -> PASS (${route.component})`);
  } else {
    console.log(`❌ ${route.url.padEnd(25)} -> FAIL (${route.component})`);
    hasError = true;
  }
}

console.log('');

if (hasError) {
  console.error('❌ BUILD FAILED: One or more registry routes do not map to physical page.tsx files.');
  process.exit(1);
} else {
  console.log('✅ Route Validation Passed! All routes map to physical files.');
  process.exit(0);
}
