# V4.5 validation

Checked in Chromium at a 393 × 852 phone viewport with synthetic saved meeting data.

- My Bets displays actualBets only, including custom tickets without recommendation links.
- Completed Won/Lost/Void tickets are collapsed; reduced wins retain their status.
- The meeting has one My Bets button and no Review My Bets button.
- Legacy review route opens My Bets without unplaced recommendations or review counts.
- Recommendation search starts empty and returns matching originals only after an explicit search.
- Saving a searched recommendation returns to that search and displays Bet Saved — Edit.
- Reopening a saved recommendation edits the existing ticket without creating a duplicate.
- Previously manual outcomes are preserved until explicitly switched to automatic; prior value retained.
- Automatic tickets recalculate when results change; missing results produce pending tickets.
- Results & Scratchings save updates outcomes and returns to My Bets.
- Storage reload retains placed tickets, notes and historical Didn’t Place markers.
- No JavaScript runtime errors or horizontal overflow in the tested phone layout.
- App and service-worker JavaScript syntax checks pass.

No user meetings or bookmaker account data were used. Settlement rules are unchanged from V4.4. The package is prepared for manual GitHub upload; the live site has not been deployed by this task.
