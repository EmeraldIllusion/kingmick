# KingMick V3

A complete update for the existing private, on-device KingMick app. No account, API key or server database is required.

## Upgrade your existing GitHub Pages app

1. In the current app, open **History → Export Backup** and keep the JSON file somewhere safe.
2. Extract this ZIP. Upload **all files inside it** into the existing GitHub repository root, replacing the same filenames. Do not upload the ZIP itself or nest the files in another folder.
3. Wait for GitHub Pages deployment, then reopen your existing app URL and refresh it. The home screen should say **KINGMICK V3**. Close and reopen the installed app if necessary.
4. Check **History**. Existing data uses the same browser storage key and is retained when upgrading at the same URL, in the same browser/profile. Changing device, browser or site address requires restoring your exported JSON backup.

Tipster Profiles remains under **History → Tipster Profiles**, and is also accessible from the performance screen. An upgrade does not send or clear your local data.

## V3 changes

- Strict Quaddie threshold: select every horse with 35+ points, with no minimum or maximum. If none qualify, select only the highest scorer(s), retaining all ties for highest, with a Low Consensus warning.
- Trifecta, Exacta and First Four now open to a strategy chooser: **Straight / Boxed / KingMick**. Select a variant to display positional selections, combination count, expandable tickets and copy instructions.
- Boxed bets now use the correct finishing-position count: Top 5 boxed Trifecta = 60 tickets; Top 6 boxed First Four = 360 tickets.
- Explicit points-tie notices show every tied contender. Rank-limited bets retain deterministic pick-count ordering, then horse number; a tie across a horse-count boundary is specifically flagged. These orderings do not imply stronger points consensus.
- At least two finalised tipsters are required. The final tipster must be saved before review; duplicate profiles are blocked.
- **KingMick Performance** tracks each saved strategy automatically, regardless of whether a real wager was placed. It displays hits/completed attempts, percentage, recent results and average combinations.
- Each of the 12 existing Win/Place multi strategies has its own record. Meeting analysis shows confirmed correct legs and pending results.
- Place multis require explicitly entered official paid-place terms. Incomplete results remain pending. Abandoned/void races are excluded, including multis containing an affected leg.
- Positional near misses identify when selected horses finished in an order excluded by a KingMick strategy.
- Original predictions are frozen; results can be edited separately. V2 and reconstructed histories remain separate from V3 statistics. Older invalid boxed tickets are retained for historical accuracy and excluded from strike rates.
- Backup/restore includes snapshots, profiles, results and place terms. Offline cache updates to V3.

## KingMick positional rules

Numbers below refer to consensus rank, not horse number. A ticket cannot use the same horse twice.

| Strategy | Rank → allowed finishing positions | Tickets with enough horses |
| --- | --- | ---: |
| Exacta | Best and second best: 1st/2nd; third best: 2nd only | 4 |
| Trifecta Top 4 | Best and second best: 1st/2nd; third best: 1st/2nd/3rd; fourth best: 2nd/3rd | 10 |
| Trifecta Top 5 | Same Top 4 rules, plus fifth best: 3rd only | 19 |
| First Four | Best three: 1st/2nd/3rd; fourth best: 2nd/3rd/4th; fifth best: 3rd/4th; sixth best: 4th only | 57 |

The Top 5 Trifecta extension and KingMick Exacta use the last discussed proposed rules as the V3 implementation defaults. The screen displays their exact positional selections so they can be reviewed.

Straight bets use the consensus order. Boxed Exacta offers Top 2 and Top 3; boxed Trifecta Top 3 and Top 5; boxed First Four Top 4 and Top 6.

## Recording results

Open **History → View meeting → Enter / Edit Race Results**. Enter official finishing horse numbers in order, with no duplicates or gaps. For Place multis, also select the official paid-place count for each relevant leg. Save and open **View Performance Analysis**, or visit **KingMick Performance** from Home.

A successful Quaddie requires selected winners in all four legs. A successful multi requires every selection to satisfy its Win/Place condition. Race-based bets require the corresponding first two, three or four finishers. Only complete, eligible attempts enter the denominator. Each generated variant is measured independently, so comparing hit rates should also consider combination counts.

Past V2 meetings use their stored recommendations, including earlier Quaddie selections. They are not recalculated under V3 rules. Pre-snapshot meetings are labelled reconstructed; their recorded picks cannot establish exactly what an earlier app displayed. V2 multi recommendations are reconstructed from stored boards and appear in the separate earlier-history group.

## Scope

Profit, stakes and payout tracking are deferred. Results and paid-place terms are entered manually. Scratching adjustments, dead heats, deductions and special bookmaker settlements are not inferred; leave affected results pending until resolved. No live field validation or cloud synchronisation is included. Browser storage is finite: keep exported backups.
