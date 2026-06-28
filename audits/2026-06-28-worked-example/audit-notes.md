# Worked Example Audit

Date: 2026-06-28

## Scope

Reviewed:

- `/Users/cengkurumichael/Dev/infrawatch/sgr-worked-example.html`
- `/Users/cengkurumichael/Dev/infrawatch/workbench.html`

Screenshots captured:

- `01-sgr-worked-example-top.png`
- `02-sgr-worked-example-full.png`
- `03-workbench-top.png`
- `04-workbench-output.png`
- `05-sgr-worked-example-mobile.png`

## User Goal

A new reader should understand:

1. What the page is.
2. Why the Kenya SGR is being used.
3. What the Project Publication Test found.
4. What information is still needed.
5. What a partner can do next.

## Strengths

- The direction is right: one real project makes the method testable.
- The output types are useful: evidence checklist, publication ask, finding row, partner action note, validation status.
- The page correctly tries to separate the method steps from the output.
- The validation warning is important and should stay.

## Main UX Risks

1. The page does not orient a cold reader.

   The hero says "This is the proof" before explaining what problem the page solves. A new visitor has to decode "worked example," "InfraWatch method," "see, test, voice," "publication ask," and "finding row" in the opening paragraph.

2. The result is buried.

   The most important conclusion is: public records reviewed are not enough to judge the project's value up front. That conclusion appears only after several technical details. The page should lead with the result, then show how the method reached it.

3. The page has no visual hierarchy.

   Move cards and output cards all have similar size, spacing, weight, and styling. The reader cannot tell which sections are explanation, evidence, verdict, or action.

4. The terminology is too internal.

   Problem terms include: NPV, CoST IDS, EPC, contingent liability, sovereign guarantee, standing, publication ask, as-reported, and finding row. Some can stay, but only after plain-English setup.

5. The tone has avoidable legal and diplomatic risk.

   Phrases like "withheld," "confidential terms," and "challenge the deal" may be true in context but can sound accusatory when presented without source framing. Use "not available in reviewed public records" and "request the records needed to assess value" unless a stronger claim is sourced.

6. The page lacks project recognition.

   The Kenya SGR is a concrete, visual project, but the page is almost entirely text. A route thumbnail, SGR image, or compact case-file header would make the example immediately legible.

7. The mobile layout is broken for comprehension.

   The two-column definition list makes the value text collapse into a narrow right column. On mobile, the labels and answers should stack.

## Recommended Page Structure

1. Hero: name the page plainly.

   Suggested H1:

   `Kenya SGR Publication Test`

   Suggested intro:

   `This page shows how one infrastructure project is tested against the method. It asks what is public, what is still needed, and what a partner can request next.`

2. Result card: give the answer first.

   Suggested card:

   `Can the public judge value from the records reviewed?`

   `Not yet. The reviewed public records are not enough to test value for money before the project. The next records to check are the loan agreement, guarantee terms, repayment schedule, and appraisal assumptions.`

3. Case-file strip.

   Include:

   - Project: Kenya Standard Gauge Railway
   - Country: Kenya
   - Financing type: Sovereign loan
   - Status: Teaching example based on available reports
   - Visual: small SGR image or route thumbnail

4. Guided method section.

   Each step should follow the same pattern:

   - Plain question
   - What we found
   - Why it matters
   - Evidence status

   Example:

   `See it`

   `What is the project and who funds it?`

   `Kenya's Standard Gauge Railway was financed through Chinese state lending.`

   `Why it matters: the financing type tells us which records are needed before value can be tested.`

5. Evidence checklist.

   Keep it, but make it a compact table:

   - Information needed
   - Status in reviewed public records
   - Why it matters

6. Publication request.

   Rename from "publication ask" to:

   `Request for project information`

   Suggested copy:

   `Publish or confirm where the loan agreement, guarantee terms, repayment schedule, and appraisal assumptions can be reviewed. These records are needed to assess whether the project offered value for money.`

7. Partner action.

   Make it operational:

   `Before external circulation, verify the source record, confirm which fields are already public, and choose the institution best placed to request the missing project information.`

8. Validation status.

   Move a short status chip near the top and keep the full validation section near the bottom.

## Copy Replacements

- Replace `Value (NPV)` with `Can value for money be tested from public records?`
- Replace `Who needs standing to challenge the terms` with `Who needs the information?`
- Replace `Holds the terms` with `Where the records may sit`
- Replace `full loan terms withheld` with `full loan terms not found in reviewed public records`
- Replace `publication ask` with `request for project information` on first use
- Replace `finding row` with `summary finding` on first use
- Replace `CoST IDS terms: loan terms + guarantee` with `Mapped to CoST publication fields: loan terms and guarantee`

## Design Directions

- Add one small SGR image or route thumbnail in the hero or case-file strip.
- Reduce the number of large white cards. Use one result card, one guided method card, one evidence table, one action card.
- Add a left-side step rail on desktop: `Result`, `See`, `Test`, `Voice`, `Request`, `Validate`.
- Use amber for incomplete evidence, not red.
- Use status chips consistently: `Teaching example`, `Needs source check`, `Safe internally`, `Not yet external`.
- On mobile, stack `dt` and `dd` fields into one column.
- Avoid all-caps mono text for long labels. It slows reading and looks technical.

## Technical Notes

- `sgr-worked-example.html` line 105 uses `Value (NPV)` without defining NPV.
- `sgr-worked-example.html` line 137 uses `CoST IDS` and a technical mapping inside the main reader sentence.
- `sgr-worked-example.html` line 150 uses "standing to challenge the debt-service terms," which is too legalistic for a first explanation.
- `workbench.html` line 181 uses `Can value (NPV) be assessed?`
- `workbench.html` lines 342 to 349 generate output with internal vocabulary that should be softened for a cold reader.

## Bottom Line

The spirit is right, but the current worked example is a technical dump. It should become a guided case file: result first, method second, evidence third, partner action last.
