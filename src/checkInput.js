import utils from './util.js';

function hasDuplicate(input) {
  const uniqueNumbers = new Set(input);
  return uniqueNumbers.size !== input.length;
}

export default function isValidInput(input) {
  if (input.length !== 3) {
    return false;
  }
  if (hasDuplicate(input)) {
    return false;
  }
  return true;
}