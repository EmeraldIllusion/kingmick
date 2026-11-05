# KingMick V4.6 — Performance & Tipster Leaderboard

## Install

1. Export a fresh backup from History.
2. Extract this ZIP. Upload all the files inside to the root of your existing GitHub repository. Replace matching files and include the new kingmick-v4-6.js.
3. Commit and wait for GitHub Pages deployment to finish.
4. Open https://emeraldillusion.github.io/kingmick/?update=4.6 in the same Brave browser/device. Home should display KINGMICK V4.6.

Do not clear site data. Meetings, snapshots, results, scratchings, profiles, notes and personal tickets remain stored under the existing browser data key. Older JavaScript bundles can remain in the repository; this release loads its own versioned bundle.

## KingMick Performance

Home → KingMick Performance now opens the streamlined recommendation-success page. Choose all meetings or one meeting. See the overall success rate, wins out of decided recommendations, pending and excluded counts. Expand a bet category, then an individual recommendation, to see the saved original combinations, entered race results and assessment reason.

Each original saved recommendation counts once whether or not it was placed. A winning combination within a boxed or KingMick recommendation counts as one successful recommendation. Pending, fully voided and invalid legacy recommendations do not enter the win-rate denominator. Larger combinations cover more outcomes; compare like strategies.

The calculation now uses the same standard settlement evaluator as automatic personal tickets, applied to the original saved combinations and selections. It normalizes numeric/string horse numbers and does not regenerate strategies from current rules. Standard multis remove void legs, exotics remove refunded scratched combinations, and Quaddies use an official tote substitute where required. Missing results, paid-place terms or required substitutes can leave recommendations pending. Unsupported partial tote abandonment remains pending for manual bookmaker confirmation; personal manual outcomes never override recommendation figures.

Earlier/reconstructed recommendations remain identified and separate from current-rule totals. Optional Daily Doubles/Trebles are not assumed available and are not generated as default performance records.

Enter Results from Performance to choose a meeting or edit the selected one. Save & Update Results returns to Performance and recalculates from stored results. Entering or correcting results also updates the Tipster Leaderboard automatically when it is opened.

Personal My Bets data remains available under History → meeting → Optional personal tickets. Its results are separate from KingMick Performance. You do not need to record placed bets to measure recommendations.

## Tipster Leaderboard

Home → Tipster Leaderboard ranks tipsters using the approved example formula, based on original saved tips and complete race results.

Per-race points (maximum 100):

- Winner tipped first: 60; second: 45; third: 30; fourth: 15; absent: 0.
- Any tipped horse finishing second adds 20; third adds 13⅓; fourth adds 6⅔, independent of tip order.
- Average across eligible races. Blend with a starting score of 50 weighted as 10 races:
  Tipster Score = (total race points + 500) / (assessed races + 10).

Scores are rounded to one decimal place for display and rank. At least 10 eligible races are required for a rank. Rank 1 has a gold border, rank 2 silver, rank 3 bronze; others use normal colours. Equal rounded scores share rank and medal, with competition ranking (1, 1, 3). Provisional tipsters appear separately until they have 10 assessed races; zero-result profiles appear in a collapsed section without a score.

Expand any tipster to see assessed races, first-pick wins, winner among their four tips, and average race points. How do rankings work? explains the formula.

Eligibility: saved completed meeting, four valid distinct finishing positions, and four valid distinct non-scratched tips. Void/incomplete races and tip sets affected by a scratching are excluded, without promoting or replacing the original tips. A profile counts once per race; ambiguous duplicate profile links are excluded. The score is an accuracy measure, not profit or a forecast; tipsters may have tipped different races.

Profiles linked to any remaining saved meeting stay protected from deletion. Unused profiles can still be deleted individually or together. No test names, races or preview data are included in the app package.

## Preserved features

Strict 35-point Quaddie selection rules, Low Consensus Exception, explicit ties, saved KingMick combination rules, recommendation buttons, editable personal tickets, duplicate prevention, backups, race mapping and offline support remain. Profit tracking is deferred.

The update does not invent new bookmaker rules. Standard settlement support and special-product limitations remain as in V4.4/V4.5.
