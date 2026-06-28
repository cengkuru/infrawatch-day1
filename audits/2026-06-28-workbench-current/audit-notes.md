# Workbench Current Audit

Date: 2026-06-28

## Scope

Reviewed `/Users/cengkurumichael/Dev/infrawatch/workbench.html`.

Captured states:

- `01-choice-desktop.png`
- `02-step1-loaded-sgr.png`
- `03-step2-records.png`
- `04-step3-who-needs-it.png`
- `09-output-complete.png`
- `10-output-complete-full.png`
- `07-choice-mobile.png`
- `08-step1-mobile.png`

## Current Verdict

Much improved, but not ready to move on.

The page now has the right product shape: a clear promise, a two-choice entry, a step-by-step flow, hidden saved tests, and a generated request. The remaining problems are about expectation, pacing, and payoff placement.

## What Works

- The landing state now explains the job: test one infrastructure project.
- The "You will leave with" box sets a useful expectation.
- The two choice cards are a major improvement over the old dropdown.
- The form is now one step at a time instead of all controls at once.
- Field labels are clearer and mostly avoid internal shorthand.
- The tracker is hidden until a test is saved.
- The generated result is understandable and defensible.
- Mobile entry is readable.

## Remaining Problems

1. The "Test your own project" card loads the Kenya SGR.

   This breaks trust. If the user selects "Test your own project," they should not land on an SGR-prefilled form. Either start blank, or rename the card to "Try the guided tool with Kenya SGR loaded."

2. The hero stays too large after the user starts the tool.

   Once the user chooses a path, the page should move into task mode. The current tool screen still repeats the full hero, which pushes the form too far down, especially on mobile.

3. The SGR-loaded note is too dominant.

   It is useful at first, but it remains large through the workflow and output. After the user starts stepping through, make it a compact status strip or hide it.

4. The generated output shows the explanation before the payoff.

   The most valuable thing is the request for project information. It appears below the supporting cards. The output should start with the request, then show how the method reached it.

5. The reveal takes too long.

   The full output takes several seconds to land. Use a short reveal or render the output immediately. This is a tool, not a cinematic moment.

6. Mobile still carries too much top matter before the task.

   The first mobile tool screen makes users pass the hero, loaded-note, and stepper before the form. Collapse the hero after entry.

## Required Fixes Before Moving On

1. Make `Test your own project` start blank.
2. Add a smaller secondary action: `Load Kenya SGR example`.
3. Collapse or hide the hero after the user enters the tool.
4. Move `The request for project information` to the top of the generated output.
5. Shorten the output reveal to under one second, or render immediately.
6. Convert the SGR-loaded note into a compact strip after the first step.

## Move-On Standard

This page is ready when a cold reader can:

1. Understand the purpose in under 10 seconds.
2. Choose example or own project without ambiguity.
3. Complete the three steps without wondering what dropdown changes mean.
4. See the generated request immediately after running the test.
5. Save or copy the result without seeing unrelated UI.

