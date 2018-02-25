// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
 let stringMap = {};

 for (const character of str) {

  if (!stringMap[character]) stringMap[character] = 1;

  else {
   stringMap[character]++;
  }
 }

 return Object.keys(stringMap).sort()[0];
}

module.exports = maxChar;
