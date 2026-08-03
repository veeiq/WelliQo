# WelliQo Presentation Architecture & Report Experience

**Status:** Finalized (Sprint 3A)
**Audience:** Designers, Frontend Engineers, Product Owners
**Purpose:** Blueprint for transforming the `AssessmentResult` into a human, motivating, and action-oriented user experience.

## 1. Overall Report Philosophy

The WelliQo Assessment Report is not a medical chart, a report card, or a sales pitch. It is a **Mirror and a Map**.

- **The Mirror:** It reflects the user's current habits with extreme empathy and zero judgment, celebrating existing strengths before introducing areas for growth.
- **The Map:** It provides a highly personalized, deterministic, and realistic action plan based on strict engine rules, never overwhelming the user.

**Key Tenets:**

- **Non-Judgmental Tone:** We use words like "Opportunity," "Discovery," and "Focus Area" instead of "Failing," "Poor," or "Risk."
- **Strength-First:** We earn trust by validating the user's current positive behaviors before asking them to change anything.
- **Progressive Disclosure:** We do not dump a massive wall of data on the user. The report unfolds like a story, revealing deeper insights through interaction.
- **Human Translation:** We never expose technical engine constants (e.g., `LOW_SLEEP`). Everything is translated into natural, conversational language (e.g., "Your sleep schedule has been inconsistent").
- **Compliance-Safe:** We present patterns and habits, never diagnoses or medical advice.

## 2. Visual Storytelling Approach

The visual language must be **premium, calm, and dynamic**.

- **Color Palette:** Soft, natural gradients (sage greens, ocean blues, warm sunrise oranges) paired with deep, high-contrast dark modes for accessibility. Harsh reds (typically associated with failure) are replaced with warm amber or neutral gray.
- **Typography:** Modern, legible sans-serif (e.g., Inter or Outfit) with generous line height to reduce cognitive load.
- **Micro-animations:** Elements fade in smoothly as the user scrolls. Scores animate gently from zero to their final value, emphasizing progress over finality.
- **Data Visualization:** We avoid clinical charts. We use organic shapes, soft radial progress rings, and continuous spectrums to represent category scores.

## 3. Information Hierarchy & Section Order

The report is structured to guide the user through a specific emotional arc:

1. **The Welcome & Hero:** Validation and clarity.
2. **Your Story:** Empathy and transition.
3. **The Strengths:** Building confidence.
4. **The Core Insights:** Empathic realization.
5. **Your Wellness Snapshot:** Granular understanding.
6. **The Action Plan:** Empowerment and direction.
7. **Your First Step Tomorrow:** Singular focus.
8. **The Progress Promise:** Motivation for the future.
9. **The Support:** Community and optional coaching.

---

## 4. Section-by-Section Design Breakdown

### Section 1: The Welcome & Hero

- **Purpose:** Acknowledge completion, set expectations, and ground the user.
- **User Emotion:** Relief, anticipation, feeling "seen".
- **Data Source:** `AssessmentResult.overallScore` (if configured), `AssessmentResult.journeyId`.
- **UI Concept:** A full-viewport, visually stunning header with a soft animated gradient background. A primary headline summarizing their overarching theme (e.g., "Your Wellness Foundation").
- **Interaction:** A gentle pulse animation on a "Discover Your Insights" scroll indicator.

### Section 2: Your Story

- **Purpose:** Help the visitor transition from answering questions to understanding themselves. Explain that this report is built entirely from their own answers, and is designed to help, not judge.
- **User Emotion:** Reassured, emotionally connected, safe.
- **UI Concept:** A conversational, welcoming block of text. It acts as a bridge. _"Everything you're about to see is based on the answers you shared. We aren't here to grade you—we're here to help you understand your unique habits and discover what comes next."_

### Section 3: The Strengths (Celebration)

- **Purpose:** Validate the user's existing positive behaviors.
- **User Emotion:** Pride, confidence, trust.
- **Data Source:** `AssessmentResult.insights` (filtered for positive metadata/tags) or high `categoryScores`.
- **UI Concept:** A grid of beautiful, glassmorphic cards highlighting what they are already doing right (e.g., "Great Hydration Habit", "Active Lifestyle").
- **Interaction:** Hover/tap expands the card slightly to reveal a short congratulatory note.

### Section 4: The Core Insights (Understanding)

- **Purpose:** Present deterministic behavioral patterns derived from the Insight Engine using human language.
- **User Emotion:** "Aha" moment, self-awareness, feeling understood.
- **Data Source:** `AssessmentResult.insights` (neutral or growth-oriented).
- **UI Concept:** A masonry layout of conversational text blocks. We map internal engine reasons to friendly explanations.
- **Language Example:** Instead of "LOW_HYDRATION", we say _"We noticed you're drinking less water than your body might need for optimal energy."_
- **Interaction:** Accordion expands to provide deeper (but natural) context about why this pattern matters.

### Section 5: Your Wellness Snapshot

- **Purpose:** Provide granular, numerical feedback on specific wellness categories (formerly "Habit Dimensions").
- **User Emotion:** Clarity, focus.
- **Data Source:** `AssessmentResult.categoryScores` (Nutrition, Sleep, Activity, etc.).
- **UI Concept:** A series of horizontal, thick, rounded progress bars or soft radial rings. Each category has a distinct, soft color.
- **Interaction:** Tapping a category flips the card or expands a drawer to show exactly which insights impacted this specific score.

### Section 6: The Action Plan

- **Purpose:** Provide a curated, highly relevant next-step roadmap.
- **User Emotion:** Motivated, equipped, relieved (it's not too hard).
- **Data Source:** `AssessmentResult.recommendations` (sorted by `priority` and `confidence`).
- **UI Concept:** A horizontal scrolling carousel or a vertical timeline of actionable cards. Each card is tagged by type (ARTICLE, VIDEO, RECIPE, ACTION).
- **Interaction:** Cards act as deep links to content. Users can "save" or "bookmark" an action.

### Section 7: Your First Step Tomorrow

- **Purpose:** Prevent user overwhelm by surfacing the _single_ highest-priority action.
- **User Emotion:** Focused, capable, clear.
- **Data Source:** The top recommendation from `AssessmentResult.recommendations`.
- **UI Concept:** A large, highlighted spotlight card separating itself from the general action plan. It details: _One simple action, estimated effort, expected impact, and why it matters._
- **Why it exists:** The user should leave remembering one single thing to do tomorrow, rather than forgetting a list of ten things.

### Section 8: The Progress Promise

- **Purpose:** Encourage the user to return and continue their journey.
- **User Emotion:** Inspired, forward-looking.
- **UI Concept:** A short, uplifting section. _"Imagine taking this assessment again in 30 days. Small steps add up. We'll be here to help you compare your progress and celebrate your improvements."_

### Section 9: The Support (Softened CTA)

- **Purpose:** Present the coaching and community ecosystem as an optional support network, not a sales pitch.
- **User Emotion:** Supported, unpressured.
- **Data Source:** `AssessmentResult.recommendations` (where type === 'COACH' or 'COMMUNITY').
- **UI Concept:** Reinforce that improvement is a journey. Emphasize learning, community, and guidance. _"You don't have to do this alone. When you're ready for accountability or personalized guidance, our coaches and community are here."_
- **Interaction:** A clear, secondary-style button: "Explore Coaching" or "Join the Community". No aggressive pop-ups.

---

## 5. Mobile-First & Accessibility Considerations

- **Mobile-First Experience:** The report must feel like a native mobile app. Complex data visualizations (like spider charts) are avoided in favor of stackable cards and horizontal swipe carousels that work beautifully on narrow screens.
- **Accessibility (a11y):**
  - All color combinations (especially text on gradients) must pass WCAG AA contrast ratios.
  - Scores must be conveyed via text (e.g., "75 out of 100"), not just via the width of a progress bar, for screen readers.
  - All interactive cards must be fully navigable via keyboard (`Tab`, `Enter`, `Space`).
  - Animations must respect the user's `prefers-reduced-motion` OS setting, gracefully degrading to simple fade-ins or instant transitions.

## 6. Compliance Strategy in UX

- **Disclaimers:** A subtle but clearly legible sticky footer or final section stating: _"This report is for educational purposes and is not medical advice."_
- **Data Privacy:** A clear, toggleable consent module before the report is saved or emailed. If the user is unauthenticated, the report lives in local state and vanishes upon closing the tab, ensuring pseudonymous safety by default.
