# food-picture-01 — Sate Ayam over Charcoal

My entry for make.fun's "Make the best-looking food picture" bounty.

## The picture

Indonesian **sate ayam**: chicken satay skewers grilling over glowing red
charcoal embers, glazed with thick peanut sauce, smoke curling up, with a
clay bowl of peanut sauce, kecap drizzle and fried shallots beside them.

Why this dish, against a field of 4,765 entries:

- **It makes you hungry first.** Charcoal fire, smoke, charred edges and a
  glistening peanut glaze are the strongest appetite cues a food picture
  can carry — grill, smoke and gloss in one frame.
- **It is unmistakably Indonesian.** Rendang, tumpeng and es cendol were
  tried as candidates too, but satay over live charcoal is the one that
  stays mouth-watering at a glance while no other entry is likely to have
  it: no burger, pizza, ramen or lava cake in a field full of them.
- **It reads at 300 px.** The skewers and the orange ember glow are clear
  even small; the main dish fills the frame.
- **Clean craft.** No hands, no people, no text, no artefacts — just the
  food, the fire and the sauce.

The image is a photograph-style render (JPEG bytes in `entry.png`, which
the gate accepts), 1024×1024, 240,544 bytes, made for this entry and
finished to the competition's limits.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` — or to `$MAKEFUN_OUTPUT_DIR` when set — and checks
the copy is non-empty, so both grader runs write the same bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
