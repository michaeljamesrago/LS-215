"use strict";

function staggeredCase(str) {
  let result = '';
  let capitalize = true;
  for (let charIndex = 0; charIndex < str.length; charIndex++) {
    if (capitalize) result += str[charIndex].toUpperCase();
    else result += str[charIndex].toLowerCase();
    capitalize = !capitalize;
  }
  return result;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
