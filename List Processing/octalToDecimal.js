"use strict"

function octalToDecimal(numberString) {
  return numberString
  .split('')
  .reverse()
  .reduce( (r, v, m) => r + (v * 8 ** m), 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
