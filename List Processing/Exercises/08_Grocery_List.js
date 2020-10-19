"use strict"

function buyFruit(arr) {
  let result = [];
  arr.forEach(function(elem) {
    for (let count = 0; count < elem[1]; count += 1) {
      result.push(elem[0]);
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
