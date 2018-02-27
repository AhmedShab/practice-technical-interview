// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn) {
 const cache = {};
 return function (...args) {
  if (cache[args]) {
   return cache[args];
  }
  else {
   cache[args] = fn.apply(this, args);
   return cache[args];
  }
 };
}

const fib = memoize(slowFib);

function slowFib(n) {

 if (n <= 2) {
  return 1;
 }
 else {
  return fib(n - 2) + fib(n - 1)
 }
}

console.log(fib(15));


module.exports = fib;


// function fib(n, cache = []) {
//  if (cache[n]) return cache[n];
//  else if (n <= 2) {
//   cache[n] = 1;
//   return cache[n];
//  }
//  else {
//   return cache[n] =  fib(n - 1, cache) + fib(n - 2, cache);
//  }
// }


// function fib(n) {
//  let add = [];

//  for (let i = 0; i <= n; i++) {
//   if (i < 2) add.push(1);
//   else {
//    add.push(add[i - 2] + add[i - 1]);
//   }
//  }
//  return add[n - 1];
// }