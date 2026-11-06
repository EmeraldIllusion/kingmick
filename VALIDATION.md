# V4.7 validation

Tested in Chromium using synthetic saved data, including the reported selection/result pattern.

- Original Quaddie leg 3/1/2/15 versus winner 5 resolves Lost with a scratched horse and no substitute.
- Entering an official substitute does not change recommendation accuracy.
- Original scratched multi selections are not removed; original scratched exotic combinations are not refunded for accuracy.
- Personal ticket calculation retains separate substitute, reduced-multi and refund treatment.
- Missing results remain pending; an abandoned included race is excluded.
- New generated snapshots save exactly one Special Pick; supported candidates are compared with bounded combination counts.
- Deterministic repeated generation from identical pre-result inputs yields identical saved pick data.
- Place terms are saved with the choice; unknown terms never create Place candidates.
- At least two valid tipsters required. No pick fabricated if all supplied horses are scratched.
- History recorded after the pick cutoff is excluded; eligible earlier results can influence reliability weights.
- Existing past/results-entered meetings cannot be backfilled. Saved choices do not change after results.
- Special Pick is present in its own performance category exactly once per meeting.
- Royal purple/gold detail page, recommendation navigation, copy/save controls, return-to-origin and duplicate prevention checked.
- Existing pre-result meeting creation works. Reload retains the saved Special Pick and personal ticket.
- Substitute fields hidden when irrelevant; optional personal ticket fields remain available.
- No runtime errors; layout fits widths 320, 393 and 760 pixels.
- Application and service-worker syntax checks pass; versioned asset references and existing storage key checked.

No user on-device data was inspected or changed. The public site has not been deployed by this task. The Special Pick model is a transparent heuristic and has not been calibrated or validated for predictive accuracy or profitability.
