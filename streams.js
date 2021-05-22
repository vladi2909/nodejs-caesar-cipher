import fs from 'fs';

export const readStream = input => {
  if (!input) {
    return process.stdin;
  }

  return fs.createReadStream(input, { encoding: 'utf8' })
    .on('error', () => {
      console.error(`Failed! Can't open '${input}'.`);
      console.error(`File doesnt exist or is not available`);
      process.exit(2);
    })
}

export const writeStream = output => {
  if (!output) {
    return process.stdout;
  }

  return fs.createWriteStream(output, {
    encoding: 'utf8',
    flags: 'a',
  })
    .on('error', () => {
      console.error(`Failed! Can't write to '${output}'`);
      console.error(`File doesnt exist or is not available`);
      process.exit(2);
    })
}
