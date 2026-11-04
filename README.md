# KingMick V4.3 — simpler results and review

## Install

1. Export a fresh JSON backup from History.
2. Extract this ZIP. Upload **all files inside it** into the existing GitHub repository root, replacing matching files. Include **kingmick-v4-3.js**.
3. Commit and wait for GitHub Pages deployment.
4. Open **https://emeraldillusion.github.io/kingmick/?update=4.3** in the same Brave browser and device. Refresh once if needed. The heading should say **KINGMICK V4.3**.

Do not clear site data. The same saved-data key is used. Existing meetings, tips, prediction snapshots, results, ticket outcomes, checklist choices and profiles carry forward. Older versioned JavaScript files can remain in the repository; this version loads only the new bundle.

## A simpler Performance page

Performance now opens on **My Bet Results**:

- One summary: wins out of settled bets, plus the win percentage.
- Expandable Quaddies, Trifectas, First Fours, Exactas, Multis, Daily Doubles and Trebles. Only categories with records appear.
- Plain explanations when no bets have been recorded, or results are still pending.
- Pending and Void do not enter settled-bet counts. Didn’t Place never creates an actual ticket.

**KingMick Predictions** is a separate view for the original generated recommendations. It includes a small scratching filter and expandable bet categories. Earlier betting rules remain separate when both old and current predictions exist; if history contains only earlier predictions, those are displayed directly instead of appearing blank.

The optional **How accurate were the selections?** section explains individual-race accuracy in plain language:

- Highest-ranked horse won.
- Winner among the four highest-ranked horses.
- Winner in KingMick’s selections.

A **What does this mean?** explanation clarifies that covering an individual winner is different from winning an entire Quaddie or multi.

## Faster bet review

In **History → View meeting → Review My Bets**:

- Won, Lost, Void and Didn’t Place rows move into a collapsed **Reviewed** section.
- Pending and unrecorded rows remain available to review.
- The counter shows how many remain in the current filtered view.
- Expand Reviewed, then a specific row, to edit a saved choice.
- Bulk losses still skip existing recorded tickets and Didn’t Place choices.

## Duplicate protection

Copying a recommendation already recorded now opens the existing ticket. Saving an identical custom ticket or attaching a second ticket to an occupied recommendation is blocked. Changes should be made by editing the saved ticket.

Existing duplicate links are not silently deleted. A notice in My Bet Results offers a comparison screen. Choose the correct ticket to keep; the other linked entries are archived and removed from actual-bet totals only after confirmation. Archived ticket data stays in the meeting and in JSON backups. Export a backup before resolving old duplicates if you want a separate copy of the original record.

## Tipsters in one place

Open **Tipsters** from Home. The duplicate Tipster Profiles shortcuts in History and Performance have been removed.

- Delete is available only when no remaining saved meeting refers to the profile.
- Unfinished meetings, meetings without results, and original prediction snapshots also protect a profile.
- Older entries without profile IDs are checked by name/alias so their profiles are not accidentally deleted.
- **Delete all unused tipsters** removes orphaned test names after confirmation. It does not remove anyone still referenced by a saved meeting.

## Existing behaviour retained

The 20/15/10/5 scoring, strict 35-point Quaddie rule and low-consensus exception, explicit point ties, KingMick positional rules, manually entered race results, official paid-place terms, optional manually settled Daily Doubles/Trebles, ticket editing, backup/restore and offline operation remain available.

Stakes, profit and payout tracking remain deferred. The app does not verify live race fields or bookmaker availability and cannot infer exceptional settlement rules. All data stays on the current browser/device; keep regular JSON backups.
