"use strict"

function myForEach(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    func(array[index], index, array);
  }
}

function myMap(array, func) {
  let result = [];
  myForEach(array, function(value) { result.push(func(value))});
  return result;
}

let plusOne = n =>n + 1;
let arr = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(arr);
