const lod = require('lodash');

let arr1 = ['a', 'b', 'c', 'x', 'y'];
let arr2 = ['a', 'y', 'd'];

console.log("Original array: " + arr1 + "\n"+ arr2);
let newArr = lod.difference(arr1, arr2);

console.log("New array: " + newArr);
