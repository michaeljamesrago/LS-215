"use strict"

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach( (num) => result = result.concat(arr2.map( (elem) => num * elem)));
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
