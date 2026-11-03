# KingMick — Android-friendly offline PWA

## Publish
1. Create a new **public** GitHub repository named `kingmick`.
2. Upload **all files** from this ZIP to the repository root (not into a subfolder).
3. Under Settings → Pages, deploy from branch `main`, folder `/(root)`.
4. Visit `https://emeraldillusion.github.io/kingmick/` after deployment. Install from your browser menu if offered.

## Features
Quaddie and single-race setup; per-tipster four-position entry; on-device autosave; meeting review; 20/15/10/5 scoring; complete tied leaderboards; 35-point quaddie selection threshold with minimum four and cutoff ties; quaddie combination counts and copy; Daily Double and Treble consecutive-leg selection; Exacta; straight and boxed Trifecta and First Four; restricted KingMick Trifecta and First Four combinations; twelve KingMick multis; meeting history; basic statistics; JSON backup/restore; offline caching.

## Important limitations
This is a working beta, not a guaranteed betting product. Review all selections before placing wagers. The app currently supports four quaddie legs, and Daily Double/Treble choices are limited to consecutive legs within those four. Points ties are shown, but an ordered top-two ranking can still contain points ties: inspect leaderboards before using rank-dependent multis. Horse numbers are not validated against live race fields. Historical statistics summarize entries, not actual bet results. Local browser data can be lost if browser/site storage is cleared: export backups. This version does not support multiple synchronized devices or cloud data.


## Version 2: results and tipsters
Adds historical prediction snapshots, read-only original tipster picks, editable race results, strike-rate calculations, linked tipster profiles, name suggestions and duplicate detection. Backup files now include tipster profiles. Older completed meetings are migrated: their original selections and bets are reconstructed from saved tipster data. This reconstruction is marked in History; it cannot verify what was displayed by an earlier software version. Existing browser data is retained using the same localStorage key.

**Before upgrading, export a JSON backup from the existing app's History screen.** Then replace the files on GitHub. Results are manually entered; no bookmaker payout, financial return or place-term data is inferred.
