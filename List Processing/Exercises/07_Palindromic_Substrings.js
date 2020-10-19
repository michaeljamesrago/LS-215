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

function palindromes(str) {
  return substrings(str).filter((substring) => isPalindrome(substring));
}

function isPalindrome(str) {
  if (str.length <= 1) return false;

  let initial = 0;
  let final = str.length - 1;

  while (initial < final) {
    if (str[initial] != str[final]) return false;
    initial += 1;
    final -= 1;
  }

  return true;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
