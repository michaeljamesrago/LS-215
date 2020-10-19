"use strict"

function leadingSubstrings(str) {
  return str.split('')
  .map( (letter, index) => str.slice(0, index + 1) );
}

function substrings(str) {
  return str.split('')
  .map( (letter, index) => leadingSubstrings(str.slice(index)))
  .flat();
}


console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
