# Content and Data Model

## Purpose

Model the site as structured, reviewable content—not loose pages. The first implementation can use local content files or a CMS, provided it preserves these fields and validation rules.

## Core entities

| Entity          | Required fields                                                                              | Notes                                                        |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Content item    | `id`, `type`, `title`, `slug`, `status`, `market`, `owner`, `reviewedAt`, `nextReviewAt`     | Shared base for guides, FAQs, recipes, and information pages |
| Topic           | `id`, `name`, `slug`, `description`, `parentId`                                              | Powers hubs and navigation                                   |
| Source          | `id`, `title`, `publisher`, `url/file`, `publishedAt`, `checkedAt`                           | Required for material factual claims                         |
| Claim           | `id`, `contentId`, `statement`, `sourceIds`, `approvalStatus`, `market`                      | Required for regulated/high-risk statements                  |
| Asset           | `id`, `file`, `alt`, `licenseOrApproval`, `market`, `expiresAt`                              | No asset may be public without ownership/approval data       |
| Review          | `id`, `contentId`, `type`, `reviewer`, `decision`, `decidedAt`, `notes`                      | Types: editorial, compliance, brand, privacy, legal          |
| Contact request | `id`, `createdAt`, `purpose`, `contactMethod`, `consentTextVersion`, `consentedAt`, `status` | Collect only fields needed for the request                   |

## Content types

### Guide

`summary`, `body`, `topics`, `relatedContentIds`, `sources`, `cta`, `author`, `riskLevel`

### Recipe

`intro`, `ingredients`, `steps`, `servings`, `preparationNotes`, `assets`, `sources`, `riskLevel`

Nutrition data and product references must be market-approved before inclusion.

### FAQ

`question`, `answer`, `topics`, `sources`, `riskLevel`, `relatedContentIds`

### Product or business information

All core fields above plus `marketApprovalId`, `requiredDisclosureIds`, and `approvalExpiresAt`. These types must not render publicly without an active approval record.

## Statuses and publishing gates

`draft → editorial-review → approval-review → scheduled → published → archived`

Only a published item with an active review date, required approvals, and valid assets may be rendered in production. An expired approval, expired asset, or overdue review automatically removes it from publication until reapproved.

## Contact request design

Initial fields: first name, preferred contact channel, contact value, topic of interest, free-text message, consent checkbox, consent version, timestamp, and market. Do not request health history, payment information, or unnecessary identity data.

Store delivery and retention rules separately from site content. The future privacy notice must specify recipients, purpose, lawful basis/consent, retention period, opt-out method, and data-request method.

## Validation rules

- Slugs are unique per locale/market and must follow the IA URL rules.
- Published content requires title, summary, owner, market, review dates, and status.
- High-risk content requires the correct completed review types.
- External sources must include an access location and last-checked date.
- Images require meaningful alt text unless explicitly decorative.
- CTA labels and consent language are versioned and reviewed.
