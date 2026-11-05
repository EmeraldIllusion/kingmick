# V4.4 validation

Engine checks passed for legacy Pending becoming automatic; explicit manual Won/Lost/Void preservation and manual hold; ordinary multi wins, losses, reduced single/multi wins, all legs void, unknown place terms; partial and full exotic refunds including exact combination counts; official tote substitutes, unknown-substitute Pending and abandoned-tote exceptions.

Browser checks passed at 390 × 844 for:

- Saving a recommended Trifecta and returning to its selected race, strategy, Top 5 option and scroll position.
- Saved-button labels, the explicit already-saved message and no duplicate on a second save.
- Returning from copied multi and Quaddie editors to their recommendation screens.
- Cancel returning to the same recommendation without saving draft changes.
- One results/scratchings form, including place terms and an official substitute.
- Updated ticket status display for reduced multis and substituted Quaddies.
- A manually confirmed losing ticket remaining unchanged when race data changes.
- Legacy Pending updating from results and explicit manual hold staying Pending.
- Saving from Quick Review returning there.
- Validation rejecting a scratched horse also entered as a finisher.
- Data retained after reload, unchanged original prediction snapshots, no horizontal overflow in the tested Performance view, no page JavaScript errors and offline navigation.

Tests used synthetic fixtures. No live GitHub deployment or user-stored meeting was changed. Exact bookmaker payouts, deductions, dead heats, SRM condition evaluation and special settlements are not modelled; those are clearly directed to manual review.
