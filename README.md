# KingMick V4.2 — quick bet review

## Upgrade

Export a fresh backup from History if possible. Extract this ZIP and upload every file into your existing GitHub repository root, replacing matching files. Include the new **kingmick-v4-2.js** file. Commit and wait for GitHub Pages deployment.

Then open **https://emeraldillusion.github.io/kingmick/?update=4.2** in the same Brave browser and device. The home screen should say **KINGMICK V4.2**. Do not clear site data. Existing meetings, results, actual tickets and profiles use the same data key.

This release retains the single uniquely named script and cache fix. Older app.js, my-bets.js and kingmick-v4-1.js files may remain in the repository; V4.2 does not load them.

## Review My Bets — fast checklist

Open **History → View meeting → Review My Bets — Quick Checklist**, or the quick-review button inside My Bets.

- **Won / Lost:** confirms you placed the original selections unchanged and records a manual outcome. A later click updates that same recorded ticket; it does not add a duplicate.
- **Pending:** confirms you placed the ticket, but its outcome is not yet settled. It is excluded from settled attempts.
- **Didn’t Place:** records that you skipped a recommendation. It creates no actual ticket and never enters actual-bet strike rates. Reset this choice if needed.
- **Changed This Bet:** opens the original selections for editing. Make the scratching substitution or other tweak, choose the outcome and save. Existing linked tickets are edited in place.
- **Bulk losses:** tick the unrecorded recommendations you placed, then press **Mark Selected as Lost**. You can select all available rows in the current filter. Existing recorded tickets and Didn’t Place rows are excluded from bulk selection.
- **Filters:** choose KingMick, Multis or All Bets, then optionally a specific race. Changing filters clears bulk selections so hidden rows are not marked accidentally.

Tickets you already recorded are recognised by their recommendation link or an exact match of their selections. Matching includes the race, so an identical horse list in a different leg is not confused with this one. Recorded rows show their outcome and are protected from bulk actions.

If an adjusted custom ticket cannot be matched safely, a notice shows how many existing tickets remain unlinked. Use **Link Existing Ticket** on the appropriate recommendation and choose the ticket you already entered. Linking preserves its selections and outcome while associating it with that strategy. It does not create another ticket.

If you have multiple recorded tickets for the same recommendation, each is listed separately for editing; a quick row outcome will not overwrite all of them. Optional Daily Double/Treble bets remain configured in My Bets and require manual outcomes; they are never assumed to be offered for arbitrary Quaddie legs.

Original tips, boards, scores, recommendations and snapshots remain unchanged. New checklist choices and ticket links are included in the normal JSON backup.

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
