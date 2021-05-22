const process = (string, shift) => {
  if (shift < 0) {
    return process(string, shift + 26);
  }

  let output = '';

  for (let i = 0; i < string.length; i++) {
    let a = string[i];

    if (a.match(/[a-z]/i)) {
      const code = string.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        a = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        a = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }

    output += a;
  }

  return output;
}

export const encode = (string, shift) => {
  return process(string, shift);
}

export const decode = (string, shift) => {
  return process(string, -shift);
}
