const fs = require('fs');

const rulesMod = require('./apps/web/src/knowledge/rules/weight-management.json');
const recsMod = require('./apps/web/src/knowledge/recommendations/weight-management.json');
const findsMod = require('./apps/web/src/knowledge/findings/weight-management.json');

const validFindings = new Set(findsMod.findings.map(f => f.id));

const neededFindings = new Set();

rulesMod.rules.forEach(r => {
    if (r.findingId && !validFindings.has(r.findingId)) {
        neededFindings.add(r.findingId);
    }
});

recsMod.recommendations.forEach(r => {
    r.triggeredByFindings.forEach(fId => {
        if (!validFindings.has(fId)) {
            neededFindings.add(fId);
        }
    });
});

console.log("Missing findings:", neededFindings.size);

Array.from(neededFindings).forEach(fId => {
    findsMod.findings.push({
      id: fId,
      title: fId.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
      category: "Direct Finding",
      severity: "INFO",
      confidence: 100,
      priority: "INFO",
      evidenceRequired: [],
      clinicalExplanation: "Direct finding generated from answers",
      userExplanation: "Based on your answer.",
      recommendationIds: [],
      contraindications: [],
      reportVisibility: false,
      reusable: true
    });
});

fs.writeFileSync('./apps/web/src/knowledge/findings/weight-management.json', JSON.stringify(findsMod, null, 2));
console.log("Findings updated.");
