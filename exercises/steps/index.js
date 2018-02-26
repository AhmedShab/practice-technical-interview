// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {

 if (n === row) return;

 if (n === stair.length) {
  console.log(stair);
  return steps(n, ++row);
 }
 if (stair.length <= row) {
  stair += '#'
 }
 else {
  stair += ' ';
 }
 return steps(n, row, stair);
}

steps(3);

module.exports = steps;






// function steps(n) {
//  let index = 0;
//  while (index < n) {
//   let differ = n - 1 - index;
//   let spaces = ' '.repeat(differ);
//   let hashes = '#'.repeat(index + 1);
//   console.log(`${hashes}${spaces}`);
//   index++;
//  }
// }