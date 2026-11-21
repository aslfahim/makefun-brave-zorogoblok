// brave entry for @zorogoblok: an old dog asleep in the sun.
// A tiny builder function composes the passage, then it is written out.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function compose(): string {
  const beats = [
    'An old dog asleep in a patch of sun, one ear twitching at a dream of running.',
    'The room is warm, the list can wait one breath',
    'and in that one breath, nothing anywhere is wrong.',
  ];
  // join the last two beats with an em dash pause, the first with a space
  return beats[0] + ' ' + beats[1] + ' — ' + beats[2];
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const passage = compose();

const chars = [...passage].length;
if (chars < 1 || chars > 280) throw new Error(`passage length ${chars} invalid`);

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), passage, 'utf8');
