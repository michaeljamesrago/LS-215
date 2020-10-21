"use strict";

function swapCase(str) {
  let result = '';
  for (let charIndex = 0; charIndex < str.length; charIndex += 1) {
    let char = str[charIndex];
    if (/\W/.test(char)) {
      result += char;
    } else if (char.toUpperCase() === char) {
      result += char.toLowerCase();
    } else if (char.toLowerCase() === char) {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
