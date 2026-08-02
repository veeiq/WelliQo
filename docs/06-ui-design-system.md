# UI Design System

## Design direction

Calm, clear, modern, and editorial—not clinical or sales-heavy. The visual system should support trust and comprehension on a phone before decoration.

## Foundations

### Layout

- Mobile-first single-column reading layout.
- Content width: comfortable measure for reading; wider grid only for collections.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64 px.
- Touch targets: at least 44 × 44 px.

### Typography

- One highly legible sans-serif family for launch.
- Base body size: 16 px minimum; line-height around 1.5–1.7.
- Heading hierarchy must be semantic and never chosen only for visual size.
- Do not put essential information in all caps or an image alone.

### Color

Use a restrained palette with neutral backgrounds, deep readable text, and one accessible accent color. Final brand colors must meet WCAG AA contrast for normal text and interactive states. Color may reinforce meaning, never be the only signal.

## Components

| Component         | Requirements                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| Header/navigation | Keyboard accessible, clear current state, no hover-only interactions                           |
| Button/link       | Clear action label, visible focus, adequate target size                                        |
| Content card      | Title, descriptive summary, optional safe metadata; whole-card behavior must remain accessible |
| Callout           | Distinguish note, safety context, and disclosure with text/icon labels                         |
| FAQ accordion     | Semantic button, visible expanded state, content available without pointer input               |
| Form field        | Persistent label, helpful error text, no placeholder-only labels                               |
| Consent control   | Unticked by default, explicit purpose and withdrawal route                                     |
| Source list       | Human-readable title/publisher; never obscure source URLs behind vague labels                  |
| Disclosure block  | Prominent enough to be read before relevant action; not hidden in tooltip/modal                |

## Page templates

**Home:** value proposition, trusted content paths, latest/featured learning, contact route, disclosures.  
**Hub:** intro, structured topic cards, key FAQs, related resources.  
**Article:** breadcrumb, title, reviewed metadata, summary, body, source list, related pages, proportional CTA.  
**Recipe:** title, photo if approved, ingredients, steps, safety context, related recipes.  
**Contact:** identity, purpose, contact form, consent text, expected response, privacy link.  
**Legal:** simple contents navigation and printable, readable text.

## Interaction rules

- Respect reduced-motion preferences; animation is never needed to understand or complete a task.
- Never use countdowns, dark patterns, forced sign-up, or ambiguous opt-outs.
- Errors appear beside the affected field and in an accessible summary when appropriate.
- Forms preserve entered values after a validation error.

## Definition of done

A component is done only when it has responsive behavior, keyboard behavior, focus styles, error/empty states, contrast verification, and plain-language content guidance.
