# Experience Engine

**Status:** Final pre-implementation architecture — approval required before code  
**Scope:** The complete visitor lifecycle, from anonymous learning through voluntary ongoing participation  
**Principle:** A visitor is always in a meaningful state. The system responds to explicit behavior, stated preferences, and consent—not hidden profiling or sales pressure.

## 1. Experience model

The Experience Engine is a state model above the content, assessment, insight, rule, and report engines. It determines what context a visitor has already earned, what help is appropriate next, what must remain separate, and what the platform may remember.

```text
visitor state + consent + explicit preferences + completed milestones
  → eligible actions, content, CTAs, and next states
```

It never changes wellness conclusions, manufactures urgency, gates learning behind identity, or moves someone into a commercial/recruitment flow automatically.

## 2. Lifecycle map

```text
Anonymous visitor
  ├─→ Explorer ─→ Engaged learner ─→ Assessment curious ─→ Assessment in progress
  │                                                        ├─→ Paused assessment
  │                                                        └─→ Report reader
  │                                                               ├─→ Personalized learner
  │                                                               ├─→ Optional coach consideration ─→ Consented coach request
  │                                                               └─→ Return journey participant
  └─→ Resource seeker ─→ Guide/recipe learner ────────────────┘

Return journey participant ─→ Habit explorer ─→ Voluntary community participant ─→ Advocate

Separate, explicit route only:
Interested in approved business learning ─→ Business learner ─→ Optional, compliant business conversation
```

“Nutrition program”, purchase, product discussion, business joining, or team membership are not platform states in the v1 experience engine. They require separately approved policies, identities, consent, market rules, and modules. They must never be inferred from wellness activity.

## 3. State catalogue

### S0 — Anonymous visitor

| Attribute               | Definition                                                            |
| ----------------------- | --------------------------------------------------------------------- |
| Purpose                 | Let a person orient safely and learn without disclosure               |
| Mindset/emotions        | Curious, skeptical, time-limited, possibly overwhelmed                |
| Primary goal            | Find an answer or decide whether the platform is trustworthy          |
| Available actions       | Browse, search, read, start assessment, view disclosures/privacy      |
| Blocked actions         | Personalized report, follow-up contact, saved private journey         |
| Visible experience      | Clear educational promise, topic paths, calm assessment invitation    |
| Recommended content/CTA | Search-intent content; “Explore a guide” or “Understand your routine” |
| Knowledge required      | None                                                                  |
| Exit conditions         | Meaningful content interaction, assessment start, or session end      |
| Next states             | Explorer, Resource seeker, Assessment curious                         |

### S1 — Explorer

| Attribute               | Definition                                                                |
| ----------------------- | ------------------------------------------------------------------------- |
| Purpose                 | Help a person refine what they are looking for                            |
| Mindset/emotions        | Interested but unconvinced; comparing options                             |
| Primary goal            | Identify the most relevant learning path                                  |
| Available actions       | Explore hubs, use topic filters, read FAQ, start assessment               |
| Blocked actions         | Coach contact prompts based only on browsing; business content mixing     |
| Visible experience      | Related educational paths, concise “what this helps with” context         |
| Recommended content/CTA | One next guide, recipe, or assessment invitation aligned to current topic |
| Knowledge required      | Topic and session interactions only                                       |
| Exit conditions         | Reads a meaningful resource, explicitly selects goal, starts assessment   |
| Next states             | Engaged learner, Resource seeker, Assessment curious                      |

### S2 — Resource seeker

| Attribute               | Definition                                                                   |
| ----------------------- | ---------------------------------------------------------------------------- |
| Purpose                 | Resolve a discrete question efficiently                                      |
| Mindset/emotions        | Practical, task-focused, possibly low patience                               |
| Primary goal            | Get a useful answer without interruption                                     |
| Available actions       | Read, save/share where available, view related resource, start assessment    |
| Blocked actions         | Modal lead capture; unrelated coach/business CTA                             |
| Visible experience      | Complete answer, sources/limits, related learning; subtle next step only     |
| Recommended content/CTA | Closely related FAQ/guide/recipe; assessment only when it clearly adds value |
| Knowledge required      | Current content topic and completion depth                                   |
| Exit conditions         | Reads substantial portion, follows related item, starts assessment, leaves   |
| Next states             | Engaged learner, Assessment curious, Anonymous visitor on fresh session      |

### S3 — Engaged learner

| Attribute               | Definition                                                                        |
| ----------------------- | --------------------------------------------------------------------------------- |
| Purpose                 | Build topic confidence and invite a deeper, voluntary pathway                     |
| Mindset/emotions        | Learning, evaluating relevance, gaining trust                                     |
| Primary goal            | Connect information to their own everyday situation                               |
| Available actions       | Continue topic cluster, save a resource, choose assessment, return later          |
| Blocked actions         | Identity request without a user-selected benefit; assumption of health need       |
| Visible experience      | Progressively relevant resource links and clear assessment value explanation      |
| Recommended content/CTA | “See which small habit may fit your routine” if topic/engagement justifies it     |
| Knowledge required      | Explicit topics, non-sensitive reading milestones, locale preference if chosen    |
| Exit conditions         | Starts assessment, saves/returns to content, or leaves                            |
| Next states             | Assessment curious, Personalized learner after report, Return journey participant |

### S4 — Assessment curious

| Attribute               | Definition                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------- |
| Purpose                 | Let the visitor make an informed, pressure-free start decision                     |
| Mindset/emotions        | Hopeful, cautious about privacy/judgment, uncertain of time                        |
| Primary goal            | Understand benefit, duration, data use, and limits                                 |
| Available actions       | Start, read methodology/privacy, leave and keep learning                           |
| Blocked actions         | Contact form as a prerequisite; unqualified promises                               |
| Visible experience      | Scope, 3–5 minute expectation, no-medical-advice statement, no-contact requirement |
| Recommended content/CTA | “Start your reflection” or “Keep exploring” equally available                      |
| Knowledge required      | None beyond assessment context                                                     |
| Exit conditions         | Consents/starts, declines, or returns to learning                                  |
| Next states             | Assessment in progress, Explorer, Resource seeker                                  |

### S5 — Assessment in progress

| Attribute               | Definition                                                                     |
| ----------------------- | ------------------------------------------------------------------------------ |
| Purpose                 | Create a dignified, adaptive discovery conversation                            |
| Mindset/emotions        | Reflective; may feel vulnerable or time constrained                            |
| Primary goal            | Share enough to receive a relevant roadmap                                     |
| Available actions       | Answer, skip eligible question, go back, pause, exit, access safety route      |
| Blocked actions         | Unrelated navigation interruption, contact capture, product/business promotion |
| Visible experience      | One question, purpose/context, phase progress, privacy/exit access             |
| Recommended content/CTA | No external content CTA until report transition; safety content if triggered   |
| Knowledge required      | Pseudonymous session, active assessment version, answer snapshot               |
| Exit conditions         | Completion threshold, explicit pause, safety route, expiry                     |
| Next states             | Paused assessment, Safety route, Report reader                                 |

### S6 — Paused assessment

| Attribute               | Definition                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| Purpose                 | Respect a break without using it as a lead opportunity                                         |
| Mindset/emotions        | Busy, uncertain, interrupted                                                                   |
| Primary goal            | Resume safely or leave without loss of control                                                 |
| Available actions       | Resume, restart, delete session, return to general learning                                    |
| Blocked actions         | Reminder contact absent explicit separate consent; report generation from insufficient answers |
| Visible experience      | Plain explanation of session expiry and privacy controls                                       |
| Recommended content/CTA | “Continue when ready”; general resources only                                                  |
| Knowledge required      | Pseudonymous session ID, progress only, retention deadline                                     |
| Exit conditions         | Resume, restart, delete, or expiry                                                             |
| Next states             | Assessment in progress, Explorer, Anonymous visitor                                            |

### S7 — Safety route

| Attribute               | Definition                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Purpose                 | Direct individual health questions to appropriate professional support                |
| Mindset/emotions        | Concerned, uncertain, may need reassurance                                            |
| Primary goal            | Receive a clear boundary and safe next option                                         |
| Available actions       | Read safety information, seek qualified professional advice, browse general education |
| Blocked actions         | Tailored wellness score/report, coach lead prompt, health-data collection             |
| Visible experience      | Calm explanation that the platform cannot offer individual medical guidance           |
| Recommended content/CTA | General wellbeing resources only; professional-care signpost                          |
| Knowledge required      | Safety flag only; do not infer/store a condition                                      |
| Exit conditions         | Leaves, returns to general learning, or restarts non-medical education route          |
| Next states             | Explorer, Resource seeker, Anonymous visitor                                          |

### S8 — Report reader

| Attribute               | Definition                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| Purpose                 | Deliver earned value: a kind, explainable, practical roadmap                               |
| Mindset/emotions        | Curious, hopeful, self-conscious, looking for clarity                                      |
| Primary goal            | Understand strengths, priorities, and a feasible next step                                 |
| Available actions       | Read report, open resources, save report where enabled, restart, choose optional support   |
| Blocked actions         | Forced account/contact, product/business/earnings messaging                                |
| Visible experience      | Strength first, 1–3 priorities, small action, reviewed resources, limits/version           |
| Recommended content/CTA | One next action and selected guides/recipes; optional “talk with someone” only if eligible |
| Knowledge required      | Versioned report snapshot, consent state, selected resource context                        |
| Exit conditions         | Opens resource, saves report, chooses support, returns later, expires                      |
| Next states             | Personalized learner, Optional coach consideration, Return journey participant             |

### S9 — Personalized learner

| Attribute               | Definition                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| Purpose                 | Help the visitor learn and try one realistic habit without pressure                        |
| Mindset/emotions        | Motivated but needs simplicity and relevance                                               |
| Primary goal            | Turn a report priority into an everyday experiment                                         |
| Available actions       | Read recommendations, view recipes, save progress voluntarily, revise/restart assessment   |
| Blocked actions         | Claims of expected outcome, persistent contact prompts, sharing personal report by default |
| Visible experience      | Prioritized learning queue, previously selected action, optional check-in explanation      |
| Recommended content/CTA | Resources matching report tags and preferred format; “try this small step”                 |
| Knowledge required      | Active report/resource IDs and optional explicit saved preference                          |
| Exit conditions         | Engages with resource, returns, requests coach, restarts, session expiry                   |
| Next states             | Habit explorer, Return journey participant, Optional coach consideration                   |

### S10 — Habit explorer

| Attribute               | Definition                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Purpose                 | Support reflection on a self-chosen habit experiment                                |
| Mindset/emotions        | Testing, learning, may be discouraged or encouraged                                 |
| Primary goal            | Decide whether to continue, simplify, or choose another educational step            |
| Available actions       | Voluntary check-in, read alternatives, revisit report, request general conversation |
| Blocked actions         | Outcome scoring, health evaluation, coercive streaks or reminders                   |
| Visible experience      | “What felt workable?” reflection, alternative small actions, progress without shame |
| Recommended content/CTA | Barrier-specific resources; optional reassessment after enough time                 |
| Knowledge required      | Only voluntary check-in answers and prior report snapshot                           |
| Exit conditions         | Returns to learning, reassesses, requests coach, ends journey                       |
| Next states             | Return journey participant, Assessment curious, Optional coach consideration        |

### S11 — Return journey participant

| Attribute               | Definition                                                                      |
| ----------------------- | ------------------------------------------------------------------------------- |
| Purpose                 | Acknowledge previous value and make continuation easy                           |
| Mindset/emotions        | Familiar, expects continuity, may have new needs                                |
| Primary goal            | Resume relevant learning without repeating everything                           |
| Available actions       | Continue resources, reopen unexpired report, reassess, manage/delete saved data |
| Blocked actions         | Assumed identity or contact; reuse after expiry without explanation             |
| Visible experience      | “Continue your learning” with transparent session/report availability           |
| Recommended content/CTA | Next unseen resource, saved action, or reassessment when prior context is stale |
| Knowledge required      | Pseudonymous saved state or authenticated explicit account only                 |
| Exit conditions         | Engages, reassesses, opts into community, data expires/deletes                  |
| Next states             | Personalized learner, Habit explorer, Voluntary community participant           |

### S12 — Optional coach consideration

| Attribute               | Definition                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------- |
| Purpose                 | Let a visitor decide whether human general support would be useful                     |
| Mindset/emotions        | Wants clarity, may value accountability, needs trust                                   |
| Primary goal            | Understand who would contact them, why, and what will be shared                        |
| Available actions       | View approved coach profile, choose language/channel, decline, request contact         |
| Blocked actions         | Automatic routing, hidden report sharing, request without consent                      |
| Visible experience      | Independent-distributor identity/disclosures, privacy summary, explicit sharing choice |
| Recommended content/CTA | “Request a general conversation” only; general resources remain available              |
| Knowledge required      | Explicit coaching preference, eligibility, approved directory data                     |
| Exit conditions         | Declines, submits consented request, returns to report/learning                        |
| Next states             | Consented coach request, Personalized learner                                          |

### S13 — Consented coach request

| Attribute               | Definition                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Purpose                 | Deliver the requested, transparent contact experience                                 |
| Mindset/emotions        | Expectant, needs control and clarity                                                  |
| Primary goal            | Receive a response through their chosen channel                                       |
| Available actions       | Confirm/withdraw consent, manage request, continue learning                           |
| Blocked actions         | Data sharing beyond consent purpose, marketing expansion, automatic business outreach |
| Visible experience      | Confirmation, response expectation, opt-out and privacy controls                      |
| Recommended content/CTA | Continue relevant education while awaiting response                                   |
| Knowledge required      | Contact/consent event, selected route, optional chosen report summary only            |
| Exit conditions         | Withdrawal, request closed, voluntarily returns to learning                           |
| Next states             | Personalized learner, Voluntary community participant, Return journey participant     |

### S14 — Voluntary community participant

| Attribute               | Definition                                                                      |
| ----------------------- | ------------------------------------------------------------------------------- |
| Purpose                 | Offer ongoing education only to someone who explicitly opts in                  |
| Mindset/emotions        | Seeking continuity, belonging, or regular learning                              |
| Primary goal            | Receive useful educational updates in their chosen form                         |
| Available actions       | Opt in/out, select topics/frequency, access resources, manage data              |
| Blocked actions         | Unconsented marketing, treatment/product claims, recruitment pressure           |
| Visible experience      | Preference centre, educational library, clear unsubscribe controls              |
| Recommended content/CTA | Chosen-topic learning, periodic reassessment invitation only when useful        |
| Knowledge required      | Explicit communication consent and selected preferences                         |
| Exit conditions         | Changes preferences, withdraws consent, becomes inactive, voluntarily advocates |
| Next states             | Return journey participant, Advocate, Anonymous visitor after deletion          |

### S15 — Advocate

| Attribute               | Definition                                                                 |
| ----------------------- | -------------------------------------------------------------------------- |
| Purpose                 | Let a satisfied learner share public education responsibly                 |
| Mindset/emotions        | Appreciative, wants to help others                                         |
| Primary goal            | Share a useful resource without making personal claims for the platform    |
| Available actions       | Share public reviewed resources, provide moderated feedback where approved |
| Blocked actions         | Income/health testimonials, unapproved claims, access to others’ reports   |
| Visible experience      | Shareable educational links and clear claim/disclosure guidance            |
| Recommended content/CTA | Topic resources, not referral pressure                                     |
| Knowledge required      | Approved public share assets only                                          |
| Exit conditions         | Continues learning, withdraws participation, remains inactive              |
| Next states             | Voluntary community participant, Return journey participant                |

### Separate state B1 — Approved business learner

This state is unavailable until a distinct business-learning module passes compliance, privacy, market, and disclosure review. It may only be entered through a direct, explicit visitor choice outside the Wellness Assessment. It has separate events, consent, data boundaries, content, and state machine. Wellness answers cannot be used to enter, personalize, target, or progress this state.

## 4. Event catalogue

| Event                             | Purpose                       | Minimum event data                       | Prohibited data/use               |
| --------------------------------- | ----------------------------- | ---------------------------------------- | --------------------------------- |
| `site_opened`                     | session orientation           | anonymous session, locale, entry context | fingerprinting/identity inference |
| `resource_opened`                 | content relevance             | public resource ID, topic                | health/personality inference      |
| `resource_depth_reached`          | usefulness proxy              | resource ID, depth band                  | manipulative popup trigger        |
| `related_resource_selected`       | navigation relevance          | source/target IDs                        | unrelated outreach                |
| `assessment_invitation_opened`    | interest                      | source context                           | lead scoring                      |
| `assessment_started`              | activate journey              | version, pseudonymous session            | identity requirement              |
| `assessment_answered`             | adaptive progression          | question ID, answer state, version       | raw answer in analytics           |
| `assessment_skipped`              | route/UX quality              | question ID, eligibility reason          | penalty or negative score         |
| `assessment_paused`               | preservation                  | session/progress only                    | reminder without consent          |
| `assessment_safety_routed`        | safe exit                     | safety route flag/version                | presumed condition                |
| `assessment_completed`            | create report                 | version/report ID                        | medical conclusion                |
| `report_generated`                | audit output                  | report/version/block IDs                 | raw report in telemetry           |
| `report_section_viewed`           | content order usefulness      | section type                             | judgment/lead ranking             |
| `resource_recommended_opened`     | recommendation relevance      | report context/resource ID               | ad targeting                      |
| `report_saved` / `report_deleted` | explicit data choice          | report ID, expiry state                  | undeclared retention              |
| `return_detected`                 | continuity                    | explicit saved session/account only      | covert cross-device tracking      |
| `habit_checkin_submitted`         | voluntary reflection          | check-in version/choice                  | health outcome claim              |
| `coach_option_viewed`             | transparency                  | directory/profile context                | automatic lead creation           |
| `coach_request_submitted`         | consented contact             | consent version, route, sharing choice   | default report sharing            |
| `coach_consent_withdrawn`         | privacy control               | consent event ID                         | continued contact                 |
| `community_opted_in/out`          | communication choice          | consent/preference version               | bundled consent                   |
| `business_learning_selected`      | separate-path explicit choice | separate module consent                  | linkage to wellness answers       |

## 5. Transition rules

| Current state                | Trigger                           | Next state                      | What changes / saves                        | Recommendation change                 |
| ---------------------------- | --------------------------------- | ------------------------------- | ------------------------------------------- | ------------------------------------- |
| Anonymous visitor            | opens relevant resource           | Resource seeker                 | anonymous topic context                     | current-topic related resources       |
| Explorer/engaged learner     | selects assessment invitation     | Assessment curious              | invitation source only                      | explanation of assessment value       |
| Assessment curious           | accepts/starts                    | Assessment in progress          | pseudonymous versioned session              | adaptive question route begins        |
| Assessment in progress       | eligible pause/exit               | Paused assessment               | encrypted/pseudonymous progress, expiry     | no prompts beyond resume option       |
| Assessment in progress       | safety condition                  | Safety route                    | safety flag only                            | suppress tailored report/CTA          |
| Assessment in progress       | route completion                  | Report reader                   | immutable report snapshot                   | top priorities and resources          |
| Report reader                | opens selected resource           | Personalized learner            | resource engagement context                 | ordered, relevant learning queue      |
| Report reader                | chooses coach option              | Optional coach consideration    | no identity yet                             | disclosures and explicit share choice |
| Optional coach consideration | explicit contact consent          | Consented coach request         | restricted identity/contact + consent event | only requested response route         |
| Report/personalized learner  | returns via saved state           | Return journey participant      | report/session availability state           | continue/reassess based on freshness  |
| Personalized learner         | submits voluntary check-in        | Habit explorer                  | chosen check-in response                    | barrier-aware next learning option    |
| Return participant           | explicit community opt-in         | Voluntary community participant | channel/topics/frequency consent            | chosen educational updates only       |
| Community participant        | shares approved public education  | Advocate                        | public share event only                     | shareable reviewed assets             |
| Any wellness state           | explicit business-learning choice | B1 Separate module              | separate consent only                       | no wellness-data-based recommendation |

## 6. Personalization policy

### Levels of personalization

| Level                  | Basis                                   | Example                             | Memory                         |
| ---------------------- | --------------------------------------- | ----------------------------------- | ------------------------------ |
| Contextual             | current page/topic/session only         | related reading after an article    | session-limited                |
| Explicit preference    | language, learning format, saved choice | show checklist before long article  | stored only with stated reason |
| Assessment-informed    | immutable report insights/tags          | show resource matching one priority | pseudonymous report lifecycle  |
| Consented relationship | coach/community choice                  | preferred contact channel           | restricted, purpose-limited    |

Do not personalize based on inferred vulnerability, body measures, unexpressed business interest, medical risk, demographic assumptions, or browsing depth alone. A person can reset or delete personalization according to the published data controls.

### State-aware experience

- First visit: simple language and high-choice, low-commitment exploration.
- Engaged learner: connect the current topic to one useful next path; do not repeat generic onboarding.
- Assessment in progress: remove unrelated distractions; preserve control and safety access.
- Report complete: show a personalized learning queue, not a sales funnel.
- Return journey: continue only from explicit saved state; explain when old context is no longer used.
- Business interest: launch a fully separate experience, with no mixed navigation, tracking, consent, or decision logic.

## 7. Experience invariants

1. Learning is always available without registration, assessment, coach contact, or purchase.
2. The assessment report is never withheld to collect contact details.
3. A visitor can leave, skip nonessential questions, restart, and delete eligible data.
4. Contact is an explicit request, not an implied consequence of low confidence or assessment completion.
5. Wellness, coach, community, product, and business journeys have separate consent and data boundaries.
6. No state transition creates a medical, income, lifestyle, or outcome claim.
7. State is evidence of journey context, not a judgment of person quality or sales value.

## 8. System memory and retention

| Memory class            | Examples                            | Storage / expiry                                             |
| ----------------------- | ----------------------------------- | ------------------------------------------------------------ |
| Ephemeral session       | current page/topic, anonymous visit | session only                                                 |
| Pseudonymous assessment | answers, report, selected resources | retention-defined, deleteable, no direct identity by default |
| Explicit saved journey  | report-save token or account choice | only after consent; transparent expiry                       |
| Contact relationship    | route, consent, sharing choice      | restricted table, purpose/retention limited                  |
| Community preference    | channel, topics, frequency          | consent-bound, editable/withdrawable                         |

Never merge these classes merely for convenience. The engine should work with less memory; forgetting is a valid, safe system behavior.

## 9. Acceptance criteria

- Every reachable visitor state has a purpose, needs, actions, blocked actions, knowledge boundary, exit condition, and next state.
- Every transition is event-driven, explainable, and has a documented save/no-save decision.
- Every personalized experience uses a declared level and respects its memory/consent boundary.
- Wellness and business paths are technically and experientially separate.
- Contact is optional, post-value, disclosed, consented, and revocable.
- No event or state can be used as hidden lead scoring, health profiling, or pressure mechanics.
- A future developer or agent can reconstruct the lifecycle from this document without relying on chat history.
