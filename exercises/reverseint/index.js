// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
 let regex = RegExp('[0-9]');
 let minus = n.toString().split('').filter(num => num === '-').join('');
 let getNumbers = n.toString().split('').filter(num => regex.test(num));

 if (minus) getNumbers.push(minus)

 return parseInt(getNumbers.reverse().join(''));
}

module.exports = reverseInt;
