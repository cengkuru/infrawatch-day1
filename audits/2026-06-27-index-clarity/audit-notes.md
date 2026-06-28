# InfraWatch Index Clarity Audit

Date: 2026-06-27

## Scope

Reviewed the top-level InfraWatch index and the three day entry pages:

- `01-cover.png`: top-level index, desktop full page
- `02-day1.png`: Day 1 entry page, desktop full page
- `03-day2.png`: Day 2 entry page, desktop full page
- `04-day3.png`: Day 3 entry page, desktop full page
- `05-cover-mobile.png`: top-level index, mobile-width full page
- `06-cover-current.png`: cached recapture of the top-level index
- `07-cover-current-cachebust.png`: cache-busted recapture of the current modified index

Source files reviewed:

- `/Users/cengkurumichael/Dev/infrawatch/index.html`
- `/Users/cengkurumichael/Dev/infrawatch/day1/index.html`
- `/Users/cengkurumichael/Dev/infrawatch/day2/index.html`
- `/Users/cengkurumichael/Dev/infrawatch/day3/index.html`
- Individual essay titles and source/caveat lines across the static site

## Observed

- The index opens with a prediction interaction: "Draw what you think transparency does to a project's value."
- The strategic thesis is present, but it is revealed after interaction: "Transparency does not make a project good. It lets you find out whether it is."
- The three-day arc is clear once reached: cannot see, can test, public can speak.
- The topic inventory is mostly chronological: Day 1 has four essays, Day 2 has one essay, Day 3 has one essay.
- The page already uses a strong visual-essay taxonomy in tags: force graph, map jump, transforming chart, proof lab, camera flythrough, full-bleed photograph.
- The site contains useful caveats: working drafts, confirm figures, conceptual figure-free, not a transcript, teaching probe, not an empirical finding.
- The Day 1 foreign-funding essay explicitly attributes the funding-definition exercise to Ria.
- I did not find Kathy-specific local evidence in the Infrawatch static pages.

## Strengths

- The site has a real editorial point, not just a gallery: transparency is framed as assessability, not automatic value.
- The three-day structure has a coherent narrative progression.
- The strongest line is the Day 3 argument: the public voice is unlocked by contract publication.
- The pages are visually consistent enough to feel like a single project, while each essay has its own visual grammar.
- Source and caveat language is visible, which protects credibility while the assets are still draft or teaching-probe status.
- The visual modes are useful strategic labels. They make the work feel repeatable, not ornamental.

## UX And Clarity Risks

- The cover asks the reader to interact before it states why the project matters. For Kathy/Ria or a contract-facing audience, the strategic value should appear before the exercise.
- "Value" does too much work. It can mean value-for-money, NPV, public value, political value, or accountability value. The index should define the specific meaning in the first screen.
- "Transparency", "disclosure", and "publication" are not separated. For CoST positioning, publication should be used for the public act and outcome where possible, while disclosure can remain when referencing the InfraWatch method or source language.
- The day structure is useful as a workshop recap, but less useful as a strategic tool. A buyer, funder, or partner needs to browse by problem, audience, and maturity status.
- The caveat model is strong, but it is scattered. Each card should show status at a glance: internal draft, teaching probe, needs figure verification, needs legal validation, external-ready.
- Day 3 is strategically the strongest, but it appears last and lightly. If the signed contract is the new context, the public-voice and contract-publication claim should move higher.
- The current modified index is already moving from chronology to method: "see it, test it, voice it." That is the right direction. The remaining clarity gap is that the first screen still opens with the prediction interaction before it states the contract-facing purpose.

## Accessibility Risks Visible From Screenshots And Markup

- The prediction dots use `role="slider"` and keyboard handling, but the controls do not expose `aria-valuemin`, `aria-valuemax`, or `aria-valuenow`.
- Several key labels are small, low-contrast mono text. They work visually as atmosphere, but some labels may be difficult for low-vision readers.
- The journey animation delays labels. Reduced-motion handling exists, but keyboard and screen-reader comprehension of the animated journey still needs manual testing.
- The full-page screenshots cannot prove color contrast, tab order, focus visibility, or assistive-technology behavior.

## Recommended Reframe

The current local `index.html` has already moved partway from:

> Three days of visual essays from the workshop.

To:

> See it, test it, voice it.

Recommended next frame:

> A reusable InfraWatch storytelling and method-demonstration tool: partner priorities, publication gaps, value testing, and public voice, organized so CIPE, CoST, and country partners can use it after the workshop.

## Proposed Topic Architecture

Use two navigation modes:

1. Chronology, for people who attended the workshop.
2. Strategic library, for people using the tool after the workshop.

Strategic library groups:

- Partner alignment: Partner priorities, shared ground.
- Definitions and scope: One railway, five counts.
- Publication gaps: What each funding type hides, Can the public prove it?
- Value testing: You cannot price what is hidden.
- Public voice and accountability: The unlock.

Each card should carry:

- Question answered.
- Audience: CIPE, CoST, country partner, funder, public.
- Method leg: CoST IDS, PEA, NPV, public voice.
- Visual mode: force graph, map jump, transforming chart, proof lab, camera flythrough, photograph essay.
- Evidence status: workshop field note, teaching probe, figure-verified, legal/source validation needed, external-ready.
- Strategic use: onboarding, funder pitch, partner debrief, training module, public explainer.

## Strategic Tool Moves

- Add a first-screen thesis before the prediction chart: "InfraWatch does not prove that publication makes projects good. It proves that publication makes value testable, and gives the public standing to challenge the terms."
- Keep "see it, test it, voice it" as the method shorthand, but pair it with an explicit use case: "Use this to brief partners, validate workshop synthesis, and turn the new CoST contract into reusable InfraWatch communication assets."
- Add a "Use this for" strip near the top: partner debrief, contract delivery update, training demo, funder conversation, public explainer.
- Add a method map page: CoST IDS plus PEA plus NPV plus public voice.
- Add a review mode for Kathy/Ria: cards grouped by "ready to share", "needs source check", "needs method validation", "needs partner quote or correction."
- Keep the cinematic views, but make the page behave like an index of decisions, not a film festival program.

## Draft Email

Subject: InfraWatch visual update and possible next use

Hi Kathy and Ria,

I wanted to share a quick update on the InfraWatch Nairobi materials. Since the workshop I have been turning the raw themes into a more structured set of visual essays and method demos, with the aim of making the work easier to revisit, validate, and use beyond the three workshop days.

The current index now has a clearer arc: Day 1 maps partner priorities and the definition problem, Day 2 tests whether value can actually be assessed, and Day 3 brings the method back to public voice and contract publication. I have also started treating each piece as a reusable tool rather than a simple recap: each one answers one question, uses a specific visual form, and carries caveats where figures or source material still need confirmation.

Given the new CoST contract context, I think the next useful step is to make the landing page less like an event archive and more like a strategic InfraWatch library: organized by problem, audience, method leg, and evidence status. That would make it easier for us to see which pieces are ready for partner discussion, which need validation, and which could become training, funder, or public-facing material.

The piece most directly connected to Ria's session is the foreign-funding definition essay. I have kept it clearly marked as first-pass field notes, not legal citations, so it can be corrected before any wider circulation.

Happy to share the link and walk through the structure. I would especially value your steer on what should be treated as internal synthesis, what should become a contract deliverable, and what could safely evolve into an external-facing InfraWatch explainer.

Best,
Michael

## Evidence Limits

- I reviewed local files and screenshots only.
- I did not verify contract details beyond the user's prompt that a CoST contract has been signed.
- I did not inspect email, calendar, Notion, or external sources.
- Kathy-specific context was not found in the local Infrawatch pages.
