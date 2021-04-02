const a = require('lodash');

let arr1 = ['abc','def','ghi','ert','swr'];
console.log("Original array: " + arr1 );

console.log("New array: ");
//chunk method returns chunks of an array
console.log(a.chunk(arr1,2));