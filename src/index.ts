/**
 * @param userInput The string a user has passed in to evaluate.
 */
export const printCharCodes = (userInput, startIndex, endIndex) => {
  console.log(`\n`);

  for (var i = startIndex; i <= endIndex; i++) {
    console.log(`CHAR: "${userInput.charAt(i)}"\t\tCHAR CODE: ${userInput.charCodeAt(i)}`);
  }
};