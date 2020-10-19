"use strict"

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(function(band) {
    return {
      name: processName(band.name),
      country: 'Canada',
      active: band.active,
    };
  });
}

function processName(bandName) {
  return capitalizeInitials(removeDots(bandName));
}

function removeDots(name) {
  console.log(name);
  console.log(typeof name);

  return name.replace(/\./g, '');
}

function capitalizeInitials(name) {
  return name
  .split(' ')
  .map( (word) => word[0].toUpperCase() + word.slice(1) )
  .join(' ');
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
