# Сaesar cipher cli

This is a command line application. It encrypts and decrypts the text with the Caesar's cipher. Valid only for letters of the Latin alphabet. All other characters remain unchanged.

## How to install

To install this application:
1. Download it from repository.
2. Run the command line and go to the application folder.
3. Enter the command "npm install".
4. The application is ready to work.

## How to use

Enter in the command line "node caesar-cli [options]", where options are command line parameters that determine the operation of the application (short alias and full name):
* -s, --shift: a shift
* -i, --input: an input file,
* -o, --output: an output file,
* -a, --action: an action encode/decode

The "shift" parameter must be a positive. A shift of letters for encryption and decryption.
The "input" parameter shows the path to the input file. Unless otherwise noted, the CLI will use "stdin".
The "output" parameter shows the path to the output file. Unless otherwise noted, the CLI will use "stdout".
The "action" parameter can take on the values ​​"encode" and "decode" and indicates what should be done with the incoming text: "encrypt" or "decrypt".

## Examples

File "input.txt": aaa bbb ccc

Run in console:
```bash
$ node cipher-cli.js -a encode -s 5 -i input.txt -o output.txt
```

Before:
File "output.txt": kkk lll mmm
