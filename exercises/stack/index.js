// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
 constructor() {
  this.data = [];
  this.size = 0;
 }

 push(value) {
  this.data[this.size] = value;
  this.size++;
 }

 pop() {
  if (!this.isEmpty()){
   let value = this.data[this.size - 1];
   this.size--;
   this.data.length = this.size;
   return value;
  }
 }

 peek() {
  if (!this.isEmpty()) {
   return this.data[this.size - 1];
  }
 }

 isEmpty() {
  if (this.size === 0) return true;

  return false;
 }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();

console.log(stack.size);


module.exports = Stack;
