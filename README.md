# KingMick V4 — My Actual Bets

V4 adds placed-ticket recording, scratching adjustments and optional Daily Double/Treble tracking to the V3 app. Existing scoring and special KingMick selection rules are unchanged.

## Upgrade

1. In your current KingMick app, open **History → Export Backup**. Keep this JSON backup safe, including the race results you recently entered.
2. Extract this ZIP and upload **all files inside it** to the existing GitHub repository root, replacing the corresponding files. Include the new **my-bets.js** file. Do not upload the ZIP itself or put the files in an extra folder.
3. Commit the changes and wait for GitHub Pages deployment. Open your usual KingMick address in the same Brave browser and refresh. The home screen should say **KINGMICK V4**.
4. Check History. The same browser storage key is used, so existing meetings, results, prediction snapshots and Tipster Profiles remain available. Do not clear site data. Restore your JSON backup only if needed.

## Record the bets you actually placed

Open **History → View meeting → My Bets**.

- **Copy a recommendation:** select a saved recommendation, then tap Copy & Edit. You can also use “I placed this bet” directly from the recommendation screen.
- **Add a custom ticket:** choose Exacta, Trifecta, First Four, Quaddie, Multi, Daily Double or Treble. Multiple tickets of the same type can be saved independently.
- **Match your bookmaker receipt:** record Straight, Boxed, Position selections or Explicit combinations for race-based bets. Quaddies use per-leg horse lists. Multis use one horse per race with individual Win/Place choices, including mixed multis.
- **Save as placed bet:** only this action creates a performance record. Opening a recommendation or drafting a ticket does not count as an attempt.
- **Edit / Delete:** changes affect your recorded ticket only. Original tips, consensus scores, leaderboards and prediction snapshots stay intact.

For your latest historical Quaddie, copy each recommendation you used and edit it to match your actual tickets. You can do this after the race results have already been entered.

## Scratchings

In **Race Numbers & Scratchings**, you can record scratched runners for each leg. This flags affected original recommendations and enables an exclusion filter in the original-performance view. It does not substitute horses automatically.

Within a ticket editor, expand **Replace a scratched horse**, select the affected race, enter the scratched and replacement numbers, and apply. It replaces the horse in the same positions on this ticket, rather than reranking all horses. The scratching is recorded when you save; Cancel discards the draft adjustment. Repeated horse numbers in different races are treated as different runners, so a replacement requires a race selection.

Always verify the final ticket against your receipt. A replacement that is already present may reduce the number of valid combinations; impossible combinations with the same horse in two finishing positions cannot be saved.

## Actual outcomes and performance

Open **KingMick Performance → My Actual Bets**, or use Performance from a saved meeting’s My Bets screen.

| Outcome | Included in attempts? |
| --- | --- |
| Won | Yes; successful attempt |
| Lost | Yes; unsuccessful attempt |
| Pending | No |
| Void | No |

Regular actual tickets default to automatic comparison with the entered finishing results. Place multis also need the official paid-place count for every relevant race. Missing information leaves them Pending. You can record a manual outcome to match a bookmaker settlement; this is explicitly labelled and takes precedence over automatic assessment. Editing results recalculates automatic outcomes, while manual outcomes stay as recorded.

Each ticket counts once, regardless of its number of combinations. Tickets copied from a KingMick recommendation remain grouped under that strategy in actual-bet performance. Unsaved recommendations never enter My Actual Bets. Original recommendation strike rates remain a separate view, with an option to exclude scratching-affected recommendations.

## Optional Daily Doubles and Trebles

These are no longer automatically generated or scored for consecutive Quaddie legs. The earlier automatic Daily Double/Treble performance entries are removed from analysis; the underlying stored prediction snapshots remain untouched.

1. Set the real race numbers under **Race Numbers & Scratchings**, including Early/Main Quaddie where applicable. New Quaddie setup also asks for these details.
2. Open Optional Daily Double or Treble, and select any two or three distinct entered races. They do not have to be consecutive.
3. Check that these are the bookmaker’s nominated races. KingMick does not verify market availability.
4. Generate selections, adjust to your actual receipt and save only if placed.
5. Explicitly mark **Won, Lost, Pending or Void** after settlement. There is no automatic outcome option for these products. Only manually recorded Won/Lost tickets enter performance attempts.

Race selection is limited to the races entered in this saved meeting. A product involving races outside those four requires a separate meeting with the relevant race data; V4 does not infer missing selections.

## Data and existing features

V4 keeps V3’s strict 35-point Quaddie threshold, low-consensus exception, explicit tie reporting, special positional betting rules, correct boxed combination counts, Tipster Profiles, result validation and offline support. V3 and V4 share the same betting-rule version because the algorithms are unchanged. Older and reconstructed prediction histories remain separately identified.

Backup/restore includes actual tickets, their manual outcomes, scratching notes, race mappings, profiles, results and original snapshots. Data remains on this browser/device; no cloud synchronisation or live result feed is added. Browser storage is finite, so keep exported backups. Profit, stakes and payout tracking remain deferred.

The app does not infer dead-heat adjustments, deductions, automatic substitute-favourite rules or other special bookmaker settlements. Record the actual adjusted selections and/or use the manual outcome to match the settled ticket.
