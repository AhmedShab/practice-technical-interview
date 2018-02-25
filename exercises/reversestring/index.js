// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return [...str]
	// .reverse()
	// .join('');

	let cloneString = [...str];
	let mid = str.length / 2;
	let start = 0;
	let last = str.length - 1;

	while (start < last) {
		let temp = cloneString[start];
		cloneString.splice(start, 1, cloneString[last]);
		cloneString.splice(last, 1, temp);
		start++;
		last --;
	}

	return cloneString.join('');
}

module.exports = reverse;
