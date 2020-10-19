"use strict"

function myForEach(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    func(array[index], index, array);
  }
}

function myOwnEvery(array, func) {
  let result = true;
  myForEach(array, function(value) {
    if (!(func(value))) {
      result = false;
    }
  });
  // array.forEach(function(elem) {
  //   console.log(elem);
  //   if (!(func(elem))) {
  //     result = false;
  //   }
  // });
  return result;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc', 'cat', 'dog', 'fish', 'cow'], isAString));       // true
