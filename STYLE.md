# Infra Watch house style

The operating logic, not the visual style: lead with the decision, make the evidence visible, explain the implication, give the reader the next move. The reader is a peer with limited time, never a student with limited ability.

## The fifteen rules

1. Start with the decision or consequence, not the background.
2. Make the headline a finding, not a topic label. "The test" fails; "Two gates decide entry; the third sorts the track" passes. Read a page's section heads in sequence: they must tell the story alone.
3. Give every page one primary idea. A page that needs two is two pages.
4. Give every visual one conclusion, stated in its title or caption.
5. Put evidence beside the claim it supports, never in a different section.
6. Separate fact, interpretation, recommendation, uncertainty, and status.
7. State the denominator, source, cut-off date, and scope of every important number. Every figure ends with a source-and-date line.
8. Show what does not count, not only what counts.
9. Use plain language without announcing it. Delete any sentence that describes what the document is doing for the reader ("in plain language", "this page explains", "you are not asked to"). Replace it with the thing itself: the finding, the ask, the date.
10. Turn every important gap into a precise request.
11. Name the owner and next action.
12. Put method history and process detail in the appendix or the tracker unless it changes the decision. Governance archaeology never reaches a partner-facing page.
13. Use status labels consistently: Agreed, Recommended, Open, Unverified, Country correction.
14. Treat accessibility and scannability as evidence-quality issues: contrast at WCAG AA, table captions and scope attributes, alt text on every figure, sections clear of the sticky nav.
15. Design for maintenance: source, owner, refresh point, and version. Kill any element that exists for the author, not the reader (the visit cloud died under this rule).

## The definition-bank page standard (codified 2026-08-06, from the eight-page review)

A bank page is a **reference, not a narrative**. The reader arrives with one operational question, "what is this, how do I apply it here, and what do I do next?", and must leave with the answer in the first screenful. Context, philosophy, methodology and provenance never block the answer. A skeleton implementing this standard lives at `_templates/definition-page.html`; copy it for every new page.

### Fixed section order

1. **Plain title.** The name of the thing, not a metaphor about it ("What is a case study?", never "where the scores stop comparing"). A reader scanning link titles must know what the page is about from the title alone. The kicker states what the page helps you decide: "Foreign financing · does this project enter the assessment?"
2. **The answer, in the hero.** One quotable plain-English sentence saying what the thing IS (never what it is not, does, or why it matters), usually also correcting the most likely misconception (foreign builder ≠ foreign financier; zero ≠ "I did not find it"). Then two or three sentences of operational definition: "In this assessment, [term] means… It is used to decide [entry / score / classification / next action]." If the reader cannot quote the definition after one reading, it is too long.
3. **The guardrail.** The most common misapplication, one sentence, in a box, BEFORE the first scroll — after the reader has absorbed the wrong habit is too late.
4. **The minimum usable test.** The checklist, criteria, scale or flow that lets the reader apply the term without a manual: 3–6 checks for a classification; threshold + required evidence for a score; visible start, decision, output and stopping point for a procedure. Checklist for independent checks; top-to-bottom flow only where steps are genuinely sequential; a ladder looks like a ladder. One concept per step — a step with two actions is two steps. No internal codes (T1, 0-D, N/A-T), no raw sheet wording in the main path.
5. **The boundary.** What counts and what does not, two or three concrete edge cases that settle 80% of arguments, one sentence each, no philosophical framing.
6. **One worked example** (one, not five): starting facts → rule applied → result → what gets recorded. Country cases and unusual scenarios go behind a disclosure or a linked page.
7. **The consequence.** What the answer changes: "If yes … / If no … / If unclear, flag for CIPE."
8. **Deeper guidance, source and status — last.** One or two sentences of links plus the footer's provenance and CIPE-authority note. No "where this connects" link salads, no Annex/section references in the body.

### Three page shapes

| Page type | Main job | Structure |
|---|---|---|
| Definition | explain a term | answer → defining features → counts/does not count → example |
| Decision rule | classify or score | answer → checks → outcomes → uncertainty/referral |
| Process | guide a sequence | purpose → visible workflow → outputs → exceptions |

### Forbidden

Opening with a story or parable (context goes below the answer or on its own page) · negative definitions as titles · internal language in the main path (sheet wording, Annex B, 0-D, per-awarded-contract ruling) · serving assessors and general readers in the same reading path (assessor detail collapses into a `<details>` disclosure) · ending with a methodology map · broken or phantom numbering (a blank step 1, an unnumbered final step) · a "one sentence" that is a paragraph · text overflowing a diagram box (size the box to the words, or cut the words).

### The pre-publish test

A first-time reader must be able to answer, without scrolling through methodology: what is this? · what misconception should I avoid? · what test or action applies? · what do I record or do next? · where do I go if the evidence does not settle it? If any answer requires "read the next section", the page is still too dense. Acid test: someone who knows nothing about the project reads for 30 seconds and answers "what is X?" in their own words. Quoting jargon, retelling a parable, or "something to do with audit trails" is a fail.

Past roughly 350 main-path body words (disclosures excluded), a page is either two pages or a page that lost its figure.

## Palette semantics

Colour is reserved for meaning: navy `#28496A` / `#142334` carries the statement; red `#CC2028` means failure or stop, nothing else; amber `#C77F00` means caution or an open decision (small amber text uses `#8A5800` for contrast); green `#1B7A3D` means a positive or settled state. Two accents per surface, generous white space.

## One fact, one page

Every rule lives on exactly one page and is linked from everywhere else, never copied. Every concept keeps one canonical illustration, byte-identical wherever it appears; the illustration lives on the concept's own page, and other artefacts embed or link it.

## The operating journey

Orient (Learn) then Define (this bank) then Test (workbench) then Prove (findings ledger) then Validate (review room) then Act (the brief with the dated ask). Each layer does its own job; no layer re-explains another.

## The four questions every draft must survive

1. What is the reader deciding?
2. What evidence supports that decision?
3. What remains uncertain?
4. What must happen next, by whom?

A paragraph that answers none of these belongs in an appendix, a definition page, or nowhere.

## Headings name the subject, never the layout

A section heading tells the reader what the section is about in the page's own vocabulary. It never describes the author's formatting ("four words, one line each"), gestures at a mood ("the traps", "holds up"), or counts abstractions the reader has not met yet ("six gates, three outcomes"). Test: could a reader who sees only the heading say what the section covers? If not, rewrite it with the actual terms, the actual count of concrete things, or the actual question the section answers. Engine-room thinking must not seep into the document (rule added 2026-08-06 after the foreign-financing "four words" heading).

## The visual grammar (codified 2026-08-06)

The governing rule: **a visual must remove a mental step**. If it decorates, repeats the text, or needs its own decoding, delete it. The page states the point in words first; the visual then makes the relationship, choice or sequence easier to retain. If it cannot be drawn on a whiteboard in 30 seconds, it is too complex for a bank page.

### Choosing the form

Use the simplest form that carries the meaning, in this order: one sentence → bulleted list → cards → table → workflow → decision tree → animation. Decision guide: peer ideas to compare in any order → cards or a table; a genuine sequence, decision or hand-off → a workflow; meaning that only movement can carry → a short animation; anything else → prose, a callout, or one annotated image.

### Cards

For independent peer ideas the reader compares in any order: counts / does not count, defining features, outcomes, misconceptions, evidence states. One idea per card: short title, one sentence of meaning, at most one example or consequence; a card that needs more is a section. Max three across on desktop, one per row on mobile. Never cards for a required order, long paragraphs, six-plus rules that must all be read, nesting, or what is really a table.

### Workflows

For "what comes first, what changes next, where is the decision, what if it fails". Must have: a visible start; one reading direction (prefer top to bottom); a diamond only where a real choice exists (rectangles are actions — "choose a balanced sample" hiding a decision is a diamond, not a rectangle); a visible output; an exception route where it changes action; no diagonal, crossing or reversing arrows. One action per node — a node with two verbs is two nodes. Show the artifact each stage produces (in the node caption or a step/output table below). Text under a diagrammed step: two sentences max; the diagram carries structure, the prose carries only the hard points. Size boxes to the words.

### Animation

Almost never. Only where movement itself carries meaning a static image cannot (a fact climbing the ladder past the funder-page trap; quick-look vs completed search). Rules: max one per page, 3 to 5 seconds, loop twice then stop or play on hover, always with a static fallback, never the only explanation, never auto-looping wallpaper. The 0-to-6 ladder, PPP tests, selection and process maps stay static.

### Visual vocabulary (stable across the bank)

Dark navy = core claim or framing · red = warning, guardrail, failure risk only · grey = context, inactive, non-decisive · green (sparingly) = qualifying or complete · amber (sparingly) = unverified, pending, awaiting review · blue line or border = normal process or reference structure. Size and position signal importance before colour does. Icons only for category, above text not beside it, never duplicating an adjacent word. Bold for the key term, never whole paragraphs. Boxes and borders for guardrails, traps and exceptions, not general content. Arrows only for sequence or causation.

### Storytelling in a bank page

Not narrative arcs: progressive disclosure and concrete framing. Three legitimate frames: misconception → correction ("you might think a foreign loan is enough; the test is material, identifiable, signed"); the journey of one fact through the system (workflows only); the hard case at the boundary in one sentence ("a Chinese state-bank loan counts; a Chinese construction contract does not").

### Build standard: five questions before adding any visual

1. What mistaken conclusion does this prevent? 2. Understood in five seconds? 3. Page still works if it does not load? 4. Does it show a relationship prose would grasp slower? 5. Does it end in an action, state or decision (enters / does not enter / flag; PPP / not PPP / unverified / refer; zero / keep searching / not yet due)? A no on 2 or 4 means use prose. One dominant explanatory visual per page plus at most one supporting table, checklist or worked example; one visual system per section. Mobile test: squint at a phone at arm's length — the phases and groups must still separate.

### Per-page prescriptions (current bank)

PPP: checklist of tests feeding outcomes, never a workflow. 0-to-6: static ladder in three zones. Foreign financing: three-question decision test + counts/does-not-count pair. Sufficient search: quick-look vs completed-search contrast. Selection: pool → eligibility → method → reflect pool → lock list + buffer flow. Assessment process: prepare → per-project/per-point loop → review → result map. Database: one worked record, never a workflow. Case study: scored project → question → evidence → verification → named action flow, with the trace-back guardrail.

### Open sweep items (adopted, not yet applied to legacy elements)

Card shadows read as interactive; new bank elements prefer a 1px border or background tint, and the existing `--shadow` cards get reviewed in a dedicated sweep, not ad hoc. Decision points currently drawn as rectangles (selection "choose a method") get diamonds in the same sweep.

## The design discipline (codified 2026-08-06)

Not "make it look like Apple": make the essential thing feel inevitable, calm and easy to use. The page succeeds when the reader forgets the page and remembers the concept; the container must be quieter than the content.

1. **Subtract first.** Before adding anything, ask what can be removed. If deleting an element (word, border, icon, colour) does not make the definition harder to understand, it was decoration. No scene-setting paragraphs; the scene is the reader's question.
2. **One page, one intellectual object.** If a page holds two, split them or subordinate one decisively. "What does this page do?" must be answerable in five words.
3. **A quiet first screen.** The hero is one restrained category label, one strong claim, two or three lines of consequence. No diagram, badge cluster or methodological preamble competing in the hero.
4. **Purpose before mechanism.** What the rule protects before the detailed test; what the concept means before its rationale; what action follows before the edge cases; what the output is before the fields behind it.
5. **Typography is the architecture.** Hierarchy through size, weight and spacing, never coloured backgrounds or underlines on headings. The definition is the largest, quietest text: not bold, not italic, generous measure. Body text one size, one face, one colour. Test: strip all colour and boxes; the definition, test and guardrail must still be distinguishable.
6. **Space is structural.** Negative space says "main claim", "separate decision", "secondary", "the end". Section spacing is mathematically consistent (double the paragraph spacing, not arbitrary). Text never touches its container. Squint test: islands of meaning in calm, not a dense grey block.
7. **Colour is a signal, never a skin.** Only states get colour (per the palette semantics above); nothing is coloured for brand feel. If two elements compete for colour, neither gets it. Test: print in black and white; if meaning is lost, structure was outsourced to colour.
8. **Cards are objects, not wallpaper.** A card is a bounded thing the reader inspects: a definition, an outcome, a worked record. Composition budget per page: one dominant visual surface, plus two to four supporting cards OR one table and one worked example. Never card the whole page. Separation by hairline border or whisper of tint (shadow retirement: see the open sweep items).
9. **Diagrams as orderly as the method.** One direction, no crossed arrows, no unexplained shapes, no decorative colour, no text repeated inside and outside, one visible output. The diagram must survive with every arrow deleted; arrows confirm reading order, never rescue it. Prefer one precise, near-diagrammatic illustration to a collage; no stock imagery, ornamental icons, or abstract "transparency" atmosphere. No icons duplicating an adjacent word.
10. **Precision is respect.** Everything on a grid; baselines align across columns; identical padding in sibling cards; fixed type-size-to-line-height ratios. Misalignment reads as untrustworthiness: careless margins imply careless definitions.
11. **Depth is revealed, not displayed.** Shallow first layer (definition, decision test, result); second layer behind restrained disclosures (worked example, edge cases, source language); third layer on linked pages (full methodology, annexes, country notes). Never hide a required action; always hide specialist-only complexity. The reader who needs only the definition must never scroll past an annex reference to reach it.
12. **Confidence, not anxiety.** No red banner for every caveat, no all-caps label walls, no oversized warnings, no draft-status signals in the reading path (status lives once, small, in the footer, which also satisfies the maintenance rule). Rigour is felt through orderly language, explicit boundaries and clean exceptions, not volume. Motion: instantaneous hover states; movement only where it teaches a state change (see the visual grammar).
13. **End with an object the reader carries away.** The last thing in the reading path is one usable rule ("below score 3, government disclosure has not begun"; "an unsearched point is never zero"). If the reader cannot repeat it an hour later, the page is still doing too much.

### The pre-publish design checklist

Subtract · Silence (container quieter than content) · Type (hierarchy survives black and white) · Breathe (space is structural) · Signal (every colour means something) · Move (every animation teaches) · Focus (one job, five words) · Align (grid and baselines) · Reveal (complexity one layer down) · Disappear (reader remembers the concept, not the layout).

### Standard page composition

1. Quiet dark hero: one claim and its consequence. 2. One main visual: test, ladder, workflow or comparison. 3. One compact practical layer: counts/does-not-count, outcomes or checklist. 4. One worked example, only where it resolves a real ambiguity. 5. Minimal source rail: status, authority and deeper links, last and small.
