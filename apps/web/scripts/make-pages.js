const fs = require('fs');
const path = require('path');

const pages = [
  'reports', 'assessments', 'analytics', 'coach-crm', 
  'notifications', 'tasks', 'settings', 'system-health', 
  'audit-logs', 'security', 'revenue'
];

pages.forEach(p => {
  const dir = path.join('src', 'app', '(admin)', 'admin', p);
  fs.mkdirSync(dir, { recursive: true });
  const title = p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const componentName = title.replace(' ', '') + 'AdminPage';
  
  const content = `import { ComingSoon } from "@/components/admin/ComingSoon";

export default function ${componentName}() {
  return <ComingSoon title="${title}" />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created ${dir}/page.tsx`);
});
