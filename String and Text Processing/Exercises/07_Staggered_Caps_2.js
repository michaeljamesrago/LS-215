"use strict";

function staggeredCase(str) {
  let result = '';
  let capitalize = true;
  for (let charIndex = 0; charIndex < str.length; charIndex++) {
    let char = str[charIndex];
    if (/[^A-Za-z]/.test(char)) {
      result += char;
      continue;
    }
    if (capitalize) result += str[charIndex].toUpperCase();
    else result += str[charIndex].toLowerCase();
    capitalize = !capitalize;
  }
  return result;
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
