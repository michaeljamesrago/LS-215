"use strict"

function totalArea(rectangles) {
  return rectangles.filter( function isASquare(rectangle) {
    return rectangle[0] === rectangle[1];
  })
  .map( function area(rectangle) {
    return rectangle.reduce(((dimension, product) => dimension * product), 1);
  })
  .reduce(((totalArea, rectangleArea) => totalArea + rectangleArea), 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141
