"use strict"

function leadingSubstrings(str) {
  return str.split('')
  .map( (letter, index) => str.slice(0, index + 1) );
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
