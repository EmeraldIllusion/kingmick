# KingMick V4.4 — automatic ticket outcomes

## Install

1. Export a fresh JSON backup from History.
2. Extract this ZIP and upload **all its files** to the existing GitHub repository root. Replace matching files and include the new **kingmick-v4-4.js** file.
3. Commit and wait for GitHub Pages deployment.
4. Open **https://emeraldillusion.github.io/kingmick/?update=4.4** in the same Brave browser/device. The heading should say **KINGMICK V4.4**.

Do not clear site data. Existing meetings, results, actual tickets, manual outcomes, checklist choices and profiles are retained using the same browser data key. Older JavaScript files can remain in the repository; this release only loads its uniquely named bundle.

## Enter results and scratchings together

Open **History → your meeting → Results & Scratchings**. For each leg:

- Enter the official finishing horse numbers in order. Leave unknown positions blank.
- Enter scratched horse numbers, separated by commas or spaces, such as `2, 5, 8`.
- Expand **Place terms, substitute or abandoned race** when required. Enter the paid-place terms from your actual ticket, an official TAB/tote substitute, or mark the race abandoned/void.
- Press **Save & Update Tickets**. My Bets opens with updated automatic outcomes and a short confirmation.

A finisher cannot also be marked scratched in the same race. Scratchings and results are stored per race, so identical horse numbers in different races remain separate.

## Pending tickets update automatically

Previously saved tickets marked Pending now follow entered results and scratchings automatically. No re-entry is needed. Automatic tickets also recalculate when results are corrected or after the app reloads.

- **Automatic:** updates to Won, Lost or Fully Voided when the available information establishes an outcome.
- **Keep pending — manual review:** explicitly holds a ticket for your review.
- **Manual Won / Lost / Void:** stays as you marked it, even if automatic assessment differs. Change the ticket back to Automatic if you want it recalculated.

Quick Review now offers **Auto** to record an original recommendation as placed and let its result update. Recommendations you have not saved as placed, and Didn’t Place choices, are never added to actual-bet statistics automatically.

## Supported standard racing settlement

The built-in assessment is for standard Australian/NZ racing tickets, following the supported Sportsbet rules below. It assesses coverage and outcome, not exact monetary payouts.

### Normal Win/Place multis across different races

A scratched selection or abandoned race removes that leg from the assessed multi:

- All remaining selections successful: **Won — Reduced Bet**. A two-leg multi can become a winning single.
- A remaining selection loses: **Lost**.
- All legs removed: **Fully Voided**.
- Remaining results or paid-place terms missing: **Pending**, unless another active leg has already definitively lost.

The saved original ticket is retained; void legs are removed only for assessment. A reduced-bet win still counts as one winning actual ticket.

### Exacta, Trifecta and First Four

Combinations containing a scratched runner are refunded/removed for assessment. Remaining valid combinations are checked against the entered finishing order.

The app shows **Won — Part Refunded** or **Lost — Part Refunded** if some combinations remain, or **Fully Voided** if none remain. The note shows the number of combinations affected. Original selected horses and tickets remain unchanged.

A partly refunded ticket with a losing live portion counts as a Lost bet. A refunded portion is not itself a winning bet. Win/loss records do not measure net profit.

### Quaddie, Daily Double and Treble

Scratched portions use the **official declared TAB/tote substitute**, not the next consensus-ranked horse. Enter that substitute when needed to establish the result. If the winner is already among the ticket’s un-scratched selections, coverage may be established without knowing the substitute for other portions.

Optional Daily Double/Treble tickets now support automatic assessment once you have selected their actual nominated races and saved the bet as placed. No bets are assumed available or counted just because the original app generated selections.

All races void: Fully Voided. A partially abandoned tote ticket remains Pending with a request to confirm the bookmaker settlement manually, because abandoned-race treatment depends on the product and official settlement.

## Exceptions and actual ticket details

Use **Special settlement? → Special product — review manually**, or a manual outcome, for Same Race Multis, nested SRMs, dead heats, promotions, unusual abandonment settlements, cash-outs or any other settlement the standard model does not cover. This release does not introduce an SRM ticket/condition model or infer its result from a Trifecta order.

The app does not calculate payouts, deductions, flexi dividends, substitute stake weighting or net profit. Those remain separate from outcome tracking. No bookmaker account or live results feed is connected.

If you replaced a scratched horse before placing your ticket, record the replacement you actually backed. If the ticket was accepted with a horse that later scratched, retain that horse on the original ticket and enter the scratching; let the supported settlement rules apply. Do not replace it with an unrelated horse unless that matches your actual settled ticket.

## Save and return to your recommendation

After **I Placed This Bet → edit/confirm → Save**, the app returns to the screen you came from:

- Same bet type, race, strategy and Top 4/Top 5 option.
- Restored scroll position and open details.
- Brief **Bet saved** confirmation.
- **✓ Bet Saved — Edit** on an already recorded recommendation.

Pressing that button again explicitly tells you the ticket is already saved and opens the existing ticket, without creating a duplicate. Editing from My Bets or Quick Review returns there instead. Cancel also returns to the originating screen and discards draft changes.

## Previous features retained

Simplified My Bet Results and KingMick Predictions, collapsed reviewed tickets, duplicate comparison/archiving, Home Tipsters and protected deletion, scoring, strict 35-point Quaddie rules, ties, KingMick positional rules, backups and offline support remain available. Profit tracking is still deferred.

## Rule references

Checked 5 November 2026:

- [Sportsbet Racing Terms & Conditions](https://helpcentre.sportsbet.com.au/hc/en-us/articles/17814533947663-Sportsbet-Racing-Terms-Conditions): racing multis, exotics and tote substitutions.
- [Sportsbet Product & Features Terms](https://helpcentre.sportsbet.com.au/hc/en-us/articles/115013721108-Product-Features-Terms-and-Conditions): regular and Same Race Multi distinctions.
- [Trifecta scratching treatment](https://helpcentre.sportsbet.com.au/hc/en-us/articles/18430020375309-Trifecta-Bets).
- [Quaddie official substitute](https://helpcentre.sportsbet.com.au/hc/en-us/articles/18430096469645-Quaddie-Bets).

Sportsbet’s final ticket settlement remains the reference when an exception applies or rules change.
