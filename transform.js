import { Transform } from 'stream';
import * as cipher from './cipher.js';

export const createCip = shift => new Transform({
  transform(chunk, _encoding, callback) {
    callback(null, cipher.encode(chunk.toString(), shift));
  },
});

export const createDecip = shift => new Transform({
  transform(chunk, _encoding, callback) {
    callback(null, cipher.decode(chunk.toString(), shift));
  },
});
