# Regenerating the search expansion index (SYN map)

The definition-bank search in `assets/library-nav.js` matches queries against
three fields per page: the term, the note, and a generated expansion string in
the `SYN` map (synonyms, plain-language phrasings, related concepts, common
misspellings). The map is generated once at build time with a cheap model; the
published site makes no AI calls and no API key ever ships.

Regenerate whenever terms are added, removed, or renamed:

1. Extract the pages array from `assets/library-nav.js` (href, term, note per entry).
2. Send one prompt to the cheapest available Gemini flash-lite lane
   (2026-08-11: `gemini-3.1-flash-lite`; `gemini-2.5-flash-lite` is retired for
   new users). Prompt used:

   > You are building a search-expansion index for a glossary about
   > infrastructure transparency assessment (CoST/CIPE Infra Watch: scoring
   > government disclosure of foreign-funded infrastructure projects, 0-6
   > scale, PPPs, eligibility, evidence).
   > For EACH term below, produce 8-14 lowercase search words/short phrases a
   > reader might type when looking for that concept WITHOUT knowing its name:
   > synonyms, plain-language phrasings, related concepts, likely questions'
   > keywords, common misspellings of the key word. Do not repeat words already
   > in the term or note. No duplicates within a term.
   > Return STRICT JSON: an object mapping href to a single space-separated
   > string of the expansion words.
   > Terms:
   > - <href> | <term> | <note>  (one line per page)

   Request JSON output (`responseMimeType: application/json`, temperature 0.2).
3. Verify every href is present in the response before writing anything.
4. Replace the `var SYN = {...}` block in `assets/library-nav.js` and update its
   generated-on date. `node --check assets/library-nav.js` must pass.
5. Spot-check in the browser: a meaning query ("typo", "deadline", "who pays")
   should surface the right term without the literal word appearing in it.

Cost reference: the full 32-term run on 2026-08-11 used 849 input / 720 output
tokens, a fraction of a cent.
