import { getArgs } from './args.js';
import { createCip, createDecip } from './transform.js';
import { readStream, writeStream } from './streams.js';

const { action, shift, input, output } = getArgs();
const read = readStream(input);
const write = writeStream(output);

read.pipe(action === 'encode' ? createCip(shift) : createDecip(shift)).pipe(write);