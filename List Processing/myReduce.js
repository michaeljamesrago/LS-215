"use strict"

function myForEach(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    func(array[index], index, array);
  }
}

function myReduce(array, func, initial) {
  let copy = array.slice();
  let accumulator;
  if (initial === undefined) {
    accumulator = copy.shift();
  } else {
    accumulator = initial;
  }
  myForEach(copy, function(value) { accumulator = func(accumulator, value); });
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

let words = ['abc', 'launch', 'targets', ''];
console.log(myReduce(words, longest));
