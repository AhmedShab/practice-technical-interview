// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
 
 const columnLength = Math.floor((n * 2) - 1)
 const midPoint = Math.floor(columnLength / 2) - 1;

 if (n === row) return;

 if (columnLength === stair.length) {
  console.log(stair);
  return pyramid(n, ++row);
 }
 if (midPoint - row <= stair.length - 1 && midPoint + row >= stair.length - 1) {
  stair += '#';
 }
 else {
  stair += ' ';
 }
 return pyramid(n, row, stair);
}

pyramid(2);

module.exports = pyramid;

// function pyramid(n) {
//  const createSpace = num => Array(num).fill(' ').join('')
//  const createPound = num => Array(num).fill('#').join('')
//  for (let i = 1; i <= n; i++) {
//   console.log(createSpace(n - i) + createPound(i * 2 - 1) + createSpace(n - i))
//  }
// }


// function pyramid(n) {
//  const columnLength = Math.floor((n * 2) - 1);
//  const midPoint = Math.floor(columnLength / 2);

//  for (let row = 0; row < n; row++){
//   let stair = '';
//   for (let column = 0; column < columnLength; column++){
//    if (midPoint - row <= column && midPoint + row >= column) {
//     stair += '#';
//    }
//    else {
//     stair += ' ';
//    }
//   }
//   console.log(stair);
//  }
// }