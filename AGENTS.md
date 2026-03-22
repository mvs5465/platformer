# AGENTS.md

Instructions for human + AI contributors in this repository.

## Product

- `platformer` is a small Phaser-based browser platformer prototype.
- The current app is intentionally minimal and runs directly from static files.

## Architecture

- `index.html` loads Phaser from a CDN and boots the game.
- `game.js` contains the scene setup, platforms, player movement, and update loop.

## Working Rules

- Keep the run path simple: no bundler, no backend, no unnecessary tooling.
- Prefer direct edits to `game.js` and `index.html`.
- Preserve the lightweight prototype nature unless a larger expansion is explicitly intended.

## Verification

- Open `index.html` in a browser or serve the folder with `python3 -m http.server 8000`.
- If you change movement or collision behavior, verify the player can still move and jump as expected.
