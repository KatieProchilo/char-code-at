#!/usr/bin/env node

import * as program from 'commander';
import * as charCodeAt from './index';

program
  .option('-s, --start <startIndex>', 'The index that char-code-at will begin evaluating.')
  .option('-e, --end <endIndex>', 'The index that char-code-at will stop evaluating.')
  .action(() => {
    const userInput = program.args[0];

    if (userInput && userInput !== undefined) {
      if (program.start && program.end) {
        charCodeAt.printCharCodes(userInput, program.start, program.end);
      } else if (program.start) {
        charCodeAt.printCharCodes(userInput, program.start, userInput.length - 1);
      } else if (program.end) {
        charCodeAt.printCharCodes(userInput, 0, program.end);
      } else {
        charCodeAt.printCharCodes(userInput, 0, userInput.length - 1);
      }
    }
  })
  .parse(process.argv);
