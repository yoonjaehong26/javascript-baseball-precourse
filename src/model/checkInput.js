function hasDuplicate(input) {
  const uniqueNumbers = new Set(input);
  return uniqueNumbers.size !== input.length;
}

function isEachNumberInRange(input) {
  return input.split('').every((char) => {
    const number = parseInt(char, 10);
    return !Number.isNaN(number) && number >= 1 && number <= 9;
  });
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
