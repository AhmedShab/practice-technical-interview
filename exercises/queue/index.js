// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
 
 constructor() {
  this.data = new Array();
 }

 add(value) {
  if (this.data.length === 0) {
   this.data[0] = value;

   return;
  }
  
  let newArray = [value];
  
  for (let i = 0; i < this.data.length; i++) {
   newArray[i + 1] = this.data[i];
  }
  this.data = newArray;
 }

 remove() {
  if (this.data.length === 0 ) return undefined;
  let remove = this.data[this.data.length - 1];
  this.data.length--;
  return remove;
 }

}

let queue = new Queue();


module.exports = Queue;
