"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const yaml = __importStar(require("js-yaml"));
const schemas_1 = require("../schemas");
const validators_1 = require("../validators");
const DOMAINS_DIR = path.join(__dirname, '../domains');
const OUTPUT_FILE = path.join(__dirname, '../index.ts');
function loadYaml(filePath) {
    try {
        if (!fs.existsSync(filePath))
            return null;
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContents);
    }
    catch (e) {
        console.error(`Error loading YAML from ${filePath}:`, e);
        return null;
    }
}
function compileDomains() {
    const masterDomain = {
        questions: [],
        facts: [],
        insights: [],
        scores: [],
        decisions: [],
        recommendations: [],
    };
    const domains = fs.readdirSync(DOMAINS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    for (const domainName of domains) {
        const domainPath = path.join(DOMAINS_DIR, domainName);
        console.log(`Compiling domain: ${domainName}...`);
        const questions = loadYaml(path.join(domainPath, 'questions.yaml')) || [];
        const facts = loadYaml(path.join(domainPath, 'facts.yaml')) || [];
        const insights = loadYaml(path.join(domainPath, 'insights.yaml')) || [];
        const scores = loadYaml(path.join(domainPath, 'scores.yaml')) || [];
        const decisions = loadYaml(path.join(domainPath, 'decisions.yaml')) || [];
        const recommendations = loadYaml(path.join(domainPath, 'recommendations.yaml')) || [];
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
    const parseResult = schemas_1.DomainSchema.safeParse(rawDomain);
    if (!parseResult.success) {
        console.error('\n❌ SCHEMA VALIDATION FAILED');
        console.error(JSON.stringify(parseResult.error.format(), null, 2));
        process.exit(1);
    }
    const validatedDomain = parseResult.data;
    // 2. Validate DAG rules (Orphans, Broken Links, Circular Logic)
    const validator = new validators_1.IntelligenceValidator(validatedDomain);
    const { isValid, errors } = validator.validate();
    if (!isValid) {
        console.error('\n❌ DAG VALIDATION FAILED');
        errors.forEach(err => console.error(` - ${err}`));
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
