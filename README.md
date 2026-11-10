# Drowsy.Games

A compact directory of browser games, Warhammer Fantasy campaigns, and tabletop tools.

## Projects

- [sqrz](https://sqrz.drowsy.games/) — multiplayer dots and boxes.
- [Secret Necromancer](https://necromancer.drowsy.games/) — a hidden-role card game for 4–5 players, with bots and a tutorial.
- [WHFB 8th Edition Army Builder](https://whfb.drowsy.games/) — army rosters.
- [The Revolt of Mallobaude](https://mallobaude.drowsy.games/) — English campaign guide, rules, and army references.
- [The Jewel of Lustria](https://lustria.drowsy.games/) — expedition campaign rules and scenarios.

## Editing

Edit titles, descriptions, and links directly in `index.html`. Styles and decorative SVG icons are in the same file. There are no dependencies, build step, external assets, or JavaScript.

Keep new entries to publicly available projects. Check the destination and its current title before adding it. Games and tabletop projects are grouped separately; the game cards become a single column on narrow screens.

## Checking locally

Run `node scripts/check.mjs` for basic structural and link checks.

Serve the repository with any static server, then check desktop and phone widths, keyboard focus, each destination, and Back navigation. The site should work without JavaScript or external resources.

## Hosting

GitHub Pages publishes `main` from the repository root, with `drowsy.games` configured in `CNAME`. The index can be updated independently of certificate provisioning. Do not change DNS or Pages security settings as part of content edits.

`DNS-CUTOVER.md` records the original domain setup. It is historical context, not an instruction to repeat DNS changes.
