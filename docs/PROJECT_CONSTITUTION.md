===========================================
WelliQo Master Constitution
Version 1.0
===========================================

This document supersedes every prompt.

Every AI agent, developer, contributor,
or automation must read and obey this
document before changing the codebase.

Breaking these rules is considered
an architectural bug.

SECTION 1
Frozen Systems

Clinical Engine
Status: FROZEN

Assessment Architecture
Status: FROZEN

Authentication
Status: FROZEN

Dashboard
Status: FROZEN

Profile
Status: FROZEN

Guest Sync
Status: FROZEN

Rule:
No modifications.
Only
- Bug fixes
- Accessibility
- Performance
- Security
- Minor UI polish

Anything else requires explicit approval.

SECTION 2
Hardcoding is forbidden

Never hardcode
- Assessment IDs
- Assessment routes
- Goal IDs
- Categories
- Clinical findings
- Recommendation mappings
- Dashboard routing
- Question counts
- Assessment metadata
- Report explanations

Always use
- Registry
- Engine
- JSON
- Repository

SECTION 3
Never create new routes

Never create routes like:
- /assessment/new
- /assessment/start
- /assessment/select
- /dashboard/new
- /profile2
- /settings2

If a new route is required: Ask first.

SECTION 4
Never duplicate pages

Forbidden:
- Second Assessment Directory
- Second Dashboard
- Second Profile
- Second Report
- Second Question Flow

Reuse. Refactor. Don't duplicate.

SECTION 5
Registry Law

Everything goes through Registry.
Nothing bypasses Registry.
No exceptions.

SECTION 6
Clinical Engine Law

Do not:
- Change scoring
- Change formulas
- Change validator
- Change findings
- Change report mapping
Without approval.

SECTION 7
Dashboard Law

Dashboard answers: "What should I do?"
Not: "What exists?"
Don't overload it.

SECTION 8
Profile Law

Profile edits:
Never Modify historical reports.
Only future assessments.

SECTION 9
Mock Data

Mock data Allowed ONLY during implementation.
Before marking work complete
Every mock value must be Removed or Clearly marked "Coming Soon".

Never fake:
- Health Scores
- Recommendations
- Progress
- Sleep
- Calories
- Assessment Results
- History

SECTION 10
Build Rule

Never declare Completed Until
npm run build passes
TypeScript passes
No duplicate routes
No duplicate pages
No hardcoded assessment IDs
No hardcoded routes
No dead imports

SECTION 11
When unsure

If uncertain
STOP
Do not invent
Do not assume
Audit
Search
Read documentation
Ask the user

SECTION 12
AI Workflow

Every task:
1. Read Constitution
2. Read relevant Architecture
3. Audit
4. Plan
5. Implement
6. Build
7. Verify
8. Report

Not: Think -> Code -> Oops 🤣

SECTION 13
Golden Rule

Architecture before Implementation.
Implementation before Optimization.
Optimization before Features.

SECTION 14
UX Law

The Assessment Experience is a guided conversation.

It must never feel like
a survey,
a government form,
or a data entry screen.

Every screen must answer:
What are we learning?
Why does it matter?
What happens next?

SECTION 15
One Source of Truth

Every concept must have ONE source of truth.

Assessment metadata -> Registry
Clinical rules -> JSON
Dashboard state -> DashboardState
Profile baseline -> Profile
Report logic -> Clinical Engine
UI copy -> Configuration

Never duplicate information between modules.
This prevents future drift.

WelliQo has reached architectural maturity.
Protect the architecture.
Features can always be added later.
Architecture is much harder to rebuild.

SECTION 16
Report Persistence Law

AssessmentResult is the single source of truth. Once a report is saved, every feature (Dashboard, History, Trends, Health Wheel, Goals, Articles, Coach recommendations, and future AI insights) must read from the persisted AssessmentResult. No feature may compute or maintain its own duplicate report state.
