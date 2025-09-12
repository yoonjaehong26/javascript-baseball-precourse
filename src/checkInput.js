import numToArr from './util.js';

function hasDuplicate(input) {
  const uniqueNumbers = new Set(input);
  return uniqueNumbers.size !== input.length;
}

function isEachNumberInRange(input) {
  for (const char of input) {
    const number = parseInt(char, 10);
    if (isNaN(number) || number < 1 || number > 9) {
      return false;
    }
  }
  return true;
}

export default function isValidInput(input, digitCount) {
  if (input.length !== digitCount) {
    return false;
  }
  if (hasDuplicate(input)) {
    return false;
  }
  return isEachNumberInRange(input);
}