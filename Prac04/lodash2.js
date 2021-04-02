const lod = require('lodash');

let arr1 = ['a', 'b', 'c'];
let arr2 = ['x', 'y', 5, 7];

console.log("Original array: " + arr1 + "\n"+ arr2);
let newArr = lod.concat(arr1, arr2);

console.log("New array: " + newArr);
