"use strict"

function myForEach(array, func) {
  for (let index = 0; index < array.length; index += 1) {
    func(array[index], index, array);
  }
}

function myFilter(array, func) {
  let result = [];
  myForEach(array, function(value) { if (func(value)) result.push(value) });
  return result;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
