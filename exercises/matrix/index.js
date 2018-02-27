// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
 let snake = [];
 for (let i = 0; i < n; i++){
  snake.push(Array(n));
 }

 snake.forEach(n => n.fill(0));

 let startRow = 0;
 let endRow = n - 1;
 let startcol = 0;
 let endCol = n - 1;
 let value = 1;

 while (startcol <= endCol && startRow <= endRow) {
  for (let i = startcol; i <= endCol; i++) {
   snake[startRow][i] = value;
   value++;
  }
  startRow++;

  for (let i = startRow; i <= endRow; i++) {
   snake[i][endCol] = value;
   value++;
  }
  endCol--;

  for (let i = endCol; i >= startcol; i--) {
   snake[endRow][i] = value;
   value++;
  }
  endRow--;

  for (let i = endRow; i >= startRow; i--) {
   snake[i][startcol] = value;
   value++;
  }
  startcol++;
 }
 return snake;
}

matrix(3);

module.exports = matrix;
