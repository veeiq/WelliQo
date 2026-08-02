# Assessment UI Flow

## Scope

This document defines interaction requirements only. Visual styling comes later and must not change engine behavior.

## Screens

| Screen                | Required content                                                          | Action                            |
| --------------------- | ------------------------------------------------------------------------- | --------------------------------- |
| Invitation            | purpose, duration, privacy summary, limits                                | start or learn more               |
| Consent/eligibility   | adult gate and session notice                                             | continue or exit                  |
| Conversation question | title, optional context, answer control, back/skip when allowed, progress | submit answer                     |
| Reflection transition | concise, nonjudgmental acknowledgement where a route changes              | continue                          |
| Safety exit           | professional-care language and broad resources                            | leave or browse                   |
| Report loading        | transparent “creating your personal summary” state                        | no fake progress claims           |
| Report                | modular sections, sources/limits, resources, optional support             | save, browse, or optional contact |
| Contact share choice  | explicit choice to share report summary and separate contact consent      | submit or decline                 |

## Interaction requirements

- One decision per screen; never show a spreadsheet-like form.
- Progress is phase-based (“Getting to know your routine”), not a deceptive percentage unless route length is known.
- Preserve selections on back navigation; explain a changed route only when useful.
- Support keyboard, screen reader labels, error announcement, mobile touch targets, reduced motion, and plain language.
- Provide “prefer not to say” or skip for nonessential personal questions.
- The report is available before contact collection and can be read without creating an account.

## Content-state requirements

Every question supports loading, error, validation, skipped, and unavailable states. The report supports low-data mode, safety mode, no-resource fallback, expired-session message, and restart. Copy must never blame a visitor for skipped or missing answers.
