# V4.3 validation

Focused headless Chromium checks passed for:

- My Bet Results as the default, with correct win totals and collapsed categories.
- Plain prediction-accuracy labels, the optional explanation and a minimal scratching checkbox.
- Clear empty-result messages and direct display of historical-only predictions.
- Tipsters available from Home, with redundant shortcuts removed.
- Protection of profiles referenced by completed meetings, unfinished meetings, original snapshots and legacy name-only entries.
- Individual and bulk deletion of unused profiles, including eligibility after deleting a meeting.
- Settled review rows hidden in a collapsed Reviewed section, with existing outcomes retained.
- Re-copying a recorded recommendation opening its existing ticket.
- Rejection of an identical custom ticket instead of creating a duplicate.
- Explicit comparison and keeper selection for existing duplicate links. Other entries are archived only after confirmation; original predictions remain unchanged.
- Saved actual tickets and archived duplicates retained after reload.
- No horizontal overflow at a 390 × 844 phone viewport and no page JavaScript errors during the checks.

A separate cached-upgrade test verified the V4.3 update URL against an installed V4.2 worker and browser cache, with working controls, unchanged saved browser data and offline navigation.

The betting algorithms were not changed. Tests used synthetic fixtures; the user's live data and GitHub deployment were not modified.
