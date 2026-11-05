# V4.6 validation

Tested in Chromium using synthetic saved meetings and profiles, with no user data.

- A complete six-horse-board fixture produces 65 original recommendations and multiple correct successes.
- Every recommendation uses the same standard calculation as an equivalent automatic ticket.
- Numeric and string horse numbers yield identical original outcomes.
- Personal ticket tweaks and manual wins do not affect recommendation totals.
- Scratched multi legs produce reduced wins; scratched straight exotics void; Quaddie official substitutes apply.
- Missing substitutes, finishers and paid-place terms remain pending when required.
- Invalid legacy recommendations are excluded; earlier records are separately displayed.
- Snapshot and original tip data remain unchanged by result assessment.
- Category/individual expansion and meeting filtering work. No competing actual-results tabs appear in Performance.
- Enter/save results returns to Performance and updates automatic assessments; personal notes retained.
- Leaderboard scoring: perfect race = 100 points; no matching tips = 0; fourth-ranked winner plus remaining top-four coverage = 55.
- Ten perfect races score 75.0 after the approved history adjustment.
- Ties share rank/colour and skip following ranks; provisional and zero-result profiles remain separate.
- Scratching-affected tips, incomplete/void races and duplicate profile-race links are excluded from tipster scoring.
- Used profiles cannot be deleted; unused profile deletion works.
- Reload preserves saved meetings and rankings.
- Phone/desktop checks at widths 320, 393 and 760 pixels show no horizontal overflow.
- No JavaScript runtime errors. App and service-worker syntax checks pass.

Prepared for manual GitHub upload. This task has not deployed the public site or inspected the user's on-device meeting data. The exact earlier 2-versus-11 discrepancy was not reconstructed; the separate original assessment path has been replaced with the shared evaluator and tested independently.
