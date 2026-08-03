import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { DomainSchema, type IntelligenceDomain } from '../schemas';
import { IntelligenceValidator } from '../validators';

const DOMAINS_DIR = path.join(__dirname, '../domains');
const OUTPUT_FILE = path.join(__dirname, '../index.ts');

function loadYaml<T>(filePath: string): T | null {
  try {
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as T;
  } catch (e) {
    console.error(`Error loading YAML from ${filePath}:`, e);
    return null;
  }
}

function compileDomains(): IntelligenceDomain {
  const masterDomain: IntelligenceDomain = {
    questions: [],
    facts: [],
    insights: [],
    scores: [],
    decisions: [],
    recommendations: [],
  };

  const domains = fs
    .readdirSync(DOMAINS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  for (const domainName of domains) {
    const domainPath = path.join(DOMAINS_DIR, domainName);

    console.log(`Compiling domain: ${domainName}...`);

    const questions = loadYaml<any[]>(path.join(domainPath, 'questions.yaml')) || [];
    const facts = loadYaml<any[]>(path.join(domainPath, 'facts.yaml')) || [];
    const insights = loadYaml<any[]>(path.join(domainPath, 'insights.yaml')) || [];
    const scores = loadYaml<any[]>(path.join(domainPath, 'scores.yaml')) || [];
    const decisions = loadYaml<any[]>(path.join(domainPath, 'decisions.yaml')) || [];
    const recommendations = loadYaml<any[]>(path.join(domainPath, 'recommendations.yaml')) || [];

    masterDomain.questions.push(...questions);
    masterDomain.facts.push(...facts);
    masterDomain.insights.push(...insights);
    masterDomain.scores.push(...scores);
    masterDomain.decisions.push(...decisions);
    masterDomain.recommendations.push(...recommendations);
  }

  return masterDomain;
}

function run() {
  console.log('--- WelliQo Intelligence Compiler ---');

  if (!fs.existsSync(DOMAINS_DIR)) {
    fs.mkdirSync(DOMAINS_DIR, { recursive: true });
    console.log('Created domains directory. No domains to compile yet.');
    return;
  }

  const rawDomain = compileDomains();

  // 1. Validate Schema via Zod
  const parseResult = DomainSchema.safeParse(rawDomain);

  if (!parseResult.success) {
    console.error('\n❌ SCHEMA VALIDATION FAILED');
    console.error(JSON.stringify(parseResult.error.format(), null, 2));
    process.exit(1);
  }

  const validatedDomain = parseResult.data;

  // 2. Validate DAG rules (Orphans, Broken Links, Circular Logic)
  const validator = new IntelligenceValidator(validatedDomain);
  const { isValid, errors } = validator.validate();

  if (!isValid) {
    console.error('\n❌ DAG VALIDATION FAILED');
    errors.forEach((err) => console.error(` - ${err}`));
    process.exit(1);
  }

  console.log('\n✅ Validation Passed: 0 Orphans, 0 Broken Links, 100% Referential Integrity.');

  // 3. Write compiled output
  const outputCode = `// SYSTEM GENERATED FILE - DO NOT EDIT MANUALLY
// Compiled on ${new Date().toISOString()}

import type { IntelligenceDomain } from './schemas';
export * from './schemas';

export const MasterEngineConfig: IntelligenceDomain = ${JSON.stringify(validatedDomain, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, outputCode, 'utf8');
  console.log(`\n✅ Compilation Successful! Saved to ${OUTPUT_FILE}`);
}

run();
