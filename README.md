# KingMick V4.7 — The KingMick Special Pick

## Install

1. Export a fresh backup from History.
2. Extract this ZIP. Upload all files inside to the root of your existing GitHub repository, replacing matching files. Include the new kingmick-v4-7.js.
3. Commit and wait for GitHub Pages deployment to finish.
4. Open https://emeraldillusion.github.io/kingmick/?update=4.7 in the same Brave browser/device. Home should display KINGMICK V4.7.

Do not clear site data. The existing data key is retained. Existing meetings, original snapshots, results, scratchings, profiles, notes, personal tickets and manually recorded personal outcomes are preserved. Earlier JavaScript bundles can remain; this version loads its own bundle.

## Recommendation performance: direct result matching

KingMick Performance now compares the saved original selections directly with the entered race results. It does not apply bookmaker substitutions, scratching refunds, reduced-multi settlements or personal manual outcomes.

Example: original Quaddie selections in a leg were 3, 1, 2 and 15. Horse 1 scratched; horse 5 won. That original recommendation is Lost. No substitute information or manual confirmation is required, regardless of the personal bookmaker ticket settlement.

- Quaddies and Win multis need their original selections to cover all required winners.
- Place selections need their original horse in the confirmed paid places.
- Exotics match the saved original ordered combinations against finishers.
- A scratched original selection is never promoted, substituted or removed from the accuracy test. If it does not match a required result, it misses.
- A known losing leg can settle the recommendation as Lost even when another result is missing.
- Required missing finishers / Place terms remain Pending where an outcome cannot yet be determined.
- Recommendations involving an abandoned race are excluded. Invalid legacy recommendations remain excluded.

These rules apply to existing performance history too, without editing the saved selections. The accuracy totals can change from V4.6 because the definition is now original selection success rather than bookmaker ticket settlement.

Optional personal My Bets remains separate and retains its existing supported settlement rules. Substitute fields are now tucked under Optional: personal ticket substitute, and only shown when such personal tickets exist. They are never required for recommendation performance.

## The KingMick Special Pick

A royal purple card with gold accents now appears on Betting Recommendations. It shows one selected bet for the meeting, with race/leg, exact selections and combination count. View Special Pick opens the full choice; Copy and I Placed This Bet are available. Reopening a saved personal ticket edits it rather than creating a duplicate. Saving/cancelling returns to the Special Pick page.

New meeting recommendations automatically save a Special Pick at generation. Optional confirmed Place terms can be entered during meeting setup. Unknown terms exclude Place candidates rather than assuming a market exists. For existing meetings with no results on the current or a future date, Create Special Pick allows entering those terms before saving a single choice.

Existing historical meetings and meetings with entered results are not backfilled with Special Picks. That would create hindsight-selected performance. A new Special Pick uses only pre-result tips, known scratchings, confirmed Place terms and eligible earlier history. It is saved with its own model version, creation time and frozen history weights. Later results, new history and scratchings never silently choose a replacement. A scratching-change notice tells you to check saved selections before placing them.

The Special Pick has its own category in KingMick Performance, with one saved pick per meeting. It is also included once in the overall recommendation count, as a distinct saved strategy. Its performance uses the same direct original-selection rules; no placed-ticket entry is needed.

### Model scope

The model compares supported Win and Place singles, saved Exacta/Trifecta/First Four options of at most 12 combinations, and saved 2-/4-leg Win/Place multis. SRMs are excluded because their actual market conditions and availability are not captured. The app does not invent an SRM product. A single Place bet may frequently have the strongest model support; variety is not forced.

This is a consensus ranking heuristic. It does not provide a calibrated winning probability, guaranteed best bet, expected payout or value rating. Complete fields, odds and market availability are not available. Verify the proposed market is offered before placing it.

### Algorithm, version 1

For reproducibility, the implementation:

- Uses every valid tipster's four preference-ordered selections with the established 20/15/10/5 scoring, plus first-pick agreement.
- Applies a mild historical reliability weight using the existing tipster accuracy score with its 10-race/50-point starting prior. Neutral weighting applies when eligible history is unavailable.
- Includes only earlier-date history whose resultsUpdatedAt timestamp was already recorded before this pick was created. The current meeting's results and later history are not used.
- Combines weighted rank support (65%) and first-choice support (35%), with a small smoothing term and a 1.65 power for relative runner strengths.
- Reserves three unlisted-runner placeholders with 30% of listed-runner strength in total, so incomplete tip lists are not treated as complete race fields. This is a modelling assumption, not a measured field estimate.
- Uses 6,000 seeded weighted order samples per leg to compare supported candidates, with cross-race products for multis. Equal candidate support is resolved by fewer combinations, then stable candidate key. The seed, version and saved inputs make the model reproducible.
- Excludes scratched candidates and requires at least two valid tipsters for a race model. If none can be assessed, no pick is fabricated.
- Stores an internal model-support score; it is not displayed as a win probability.

The 12-combination limit prevents arbitrarily large exotics from winning the comparison simply by covering almost every outcome. The usual KingMick recommendation rules remain unchanged.

## Other retained features

The Tipster Leaderboard, its approved scoring formula, provisional profiles, shared ties/medal colours, protected profile deletion, strict 35-point Quaddie rules, Low Consensus Exception, original saved combination rules, explicit ties, backups and offline support remain. Profit tracking remains deferred.
