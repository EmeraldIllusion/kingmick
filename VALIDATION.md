# V4.2 validation

Focused automated browser checks at a 390 × 844 viewport passed for:

- Recognising a winning actual ticket recorded before the checklist, without duplication.
- Repeated Won/Lost actions updating the same ticket rather than adding copies.
- Pending exclusion and Didn’t Place creating no actual ticket.
- Bulk losses recording only selected, unrecorded tickets and protecting existing wins and skipped recommendations.
- Editing a scratching replacement, retaining its original finishing-position restrictions, saving it and returning to the checklist.
- Updating a changed ticket's outcome without losing its replacement selections.
- Matching unchanged custom tickets by selections and race; manually linking an adjusted custom ticket without altering it or adding another ticket.
- Multi quick outcomes, select-all/clear, strategy/race filtering and filter selection reset.
- Preservation of the original prediction snapshot, saved checklist choices and actual ticket counts across reload.
- No horizontal overflow in the tested phone layout, and offline loading of V4.2.

The stale-cache upgrade test also reproduced the earlier mixed V3/V4 error, then verified the uniquely named V4.2 bundle restores functional buttons, preserves browser data and supports offline navigation through the existing caches.

Existing V4.1 betting algorithms and results evaluation were retained. Checks used synthetic fixtures, not the user's live tickets. The live GitHub deployment was not changed.
