// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str, start = 0, end = str.length - 1) {
 let cloneString = [...str];

 const temp = cloneString[start];
 cloneString.splice(start, 1, cloneString[end]);
 cloneString.splice(end, 1, temp);

 if (start >= end) {
  return cloneString;
 }
 

 palindrome(cloneString.join(''), ++start, --end);
 
 return cloneString.join('') === str;
}

module.exports = palindrome;
