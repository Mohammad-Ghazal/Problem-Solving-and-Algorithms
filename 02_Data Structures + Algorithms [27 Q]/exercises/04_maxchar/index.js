// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = -Infinity;
  let maxChar;
  const obj = {};

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return maxChar;
}

module.exports = maxChar;
