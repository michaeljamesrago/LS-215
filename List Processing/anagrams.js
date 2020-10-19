"use strict"

function anagram(word, list) {
  return list.filter( (anagram) => isAnagram(word, anagram) );
}

function isAnagram(word, anagram) {
  let chars = word.split('');
  for (let index = 0; index < chars.length; index += 1) {
    let firstIndex = anagram.indexOf(chars[index]);
    if (firstIndex === -1) return false;
    anagram = anagram.slice(0, firstIndex) + anagram.slice(firstIndex + 1);
  }
  if (anagram.length === 0) return true;
  return false;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
