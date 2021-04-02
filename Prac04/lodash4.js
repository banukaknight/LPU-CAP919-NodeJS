const lod = require('lodash');

// Original array 
let arr1 = ['a', 'b', 'c', 'r', 't', 'y'];

// The lodash.fill() method is used to fill a set of values
// into the array in a given range
// lodash.fill(array, value, startIndex, endIndex)
console.log("Original array: " + arr1);
lod.fill(arr1, 'x', 1, 4);

console.log("New array: " + arr1);
