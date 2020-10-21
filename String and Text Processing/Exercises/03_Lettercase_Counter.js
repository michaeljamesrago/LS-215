"use strict";

function letterCaseCount(str) {
  let lowercase = countChars(str, (char) => /[a-z]/.test(char));
  let uppercase = countChars(str, (char) => /[A-Z]/.test(char));
  return {
    lowercase,
    uppercase,
    neither: str.length - (lowercase + uppercase),
  }
}

function countChars(str, func) {
  return str.split('')
  .reduce( function(total, char) {
    return func(char) ? total + 1 : total;
  }, 0);
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
