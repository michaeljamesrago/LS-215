"use strict"

function isBalanced(str) {
  let balance = 0;
  let chars = str.split('');
  for (let index = 0; index < chars.length; index += 1) {
    if (chars[index] === '(') balance += 1;
    if (chars[index] === ')') balance -= 1;
    if (balance < 0) return false;
  }
  return balance === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
