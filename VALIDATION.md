# V4 validation

Automated checks used synthetic fixtures and headless Chromium at a 390 × 844 phone viewport. The user's live site and stored on-device data were not accessed or modified.

Passed checks:

- V3 regression checks: strict 35-point threshold, highest-score ties, all special positional rules, correct ticket counts, all 12 multis, results validation, entry/review, persistence and offline reload.
- Copying and editing saved recommendations; multiple tickets per type; editing updates one ticket instead of adding another.
- Positional scratching replacement: adjusted actual ticket wins while original recommendation remains a miss and its snapshot stays byte-for-byte unchanged.
- A scratched horse replacement requires the affected race; another race using the same horse number remains unchanged.
- Boxed Trifecta, straight Exacta, explicit First Four combinations, Quaddie, copied multis and custom mixed Win/Place multis.
- Adding/removing multi legs; recording and deleting actual tickets; cancelling an edited draft does not create a ticket.
- Zero valid positional combinations and repeated race selections are rejected.
- Optional Daily Double and Treble generation from nonconsecutive races, no attempt from an unsaved draft, and manual Won/Lost/Pending/Void handling.
- No automatic Daily Double/Treble recommendation records, including on older stored meetings.
- Unknown paid-place terms leave actual Place multis pending. Changing entered results recalculates automatic outcomes and does not overwrite manual settlements.
- Separate original and actual performance views; scratching labels and original-performance exclusion filter; no horizontal overflow in the tested summary.
- V4 JSON export/restore round-trip retains actual tickets, manual outcomes, original snapshot, results, scratchings and race mapping.
- New Early Quaddie setup records the real race numbers.
- No page JavaScript errors during the browser scenarios.

Combination regression counts: KingMick Exacta 4; KingMick Trifecta Top 4 = 10; Top 5 = 19; KingMick First Four = 57; boxed Top 5 Trifecta = 60; boxed Top 6 First Four = 360.

These are fixture-based checks, not verification against real betting receipts or bookmaker settlements. Manual optional-bet outcomes and entered race mappings must be supplied correctly by the user.
