// food-picture-01 entry: Indonesian sate ayam (chicken satay) grilling over
// glowing charcoal embers, glazed with peanut sauce.
//
// The picture ships in this repository as entry.png. It is JPEG bytes
// under a .png name, which the gate accepts: the format is told apart by
// the file's first bytes (FFD8), and the name stays entry.png either way.
// At 1024x1024 and about 235 KiB it sits inside the gate's limits
// (at most 1024x1024 pixels, at most 1 MiB).
//
// The program copies that picture unchanged to the output directory the
// grader provides, then checks the copy is whole and non-empty, so both
// runs write the same bytes.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

copyFileSync(source, target);

const size = statSync(target).size;
if (size === 0) {
  throw new Error('entry.png was written empty');
}
