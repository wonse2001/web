'use strict';

// 1. Declaration
const arr1 = new Array();
const arr = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
console.clear();
// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('orange', 'grape');
console.log(fruits);

// pop: remove an item the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('orange','apple');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower then pop, push
// splice: remove an item by index position
fruits.push('peach', 'melon');
console.log(fruits);
fruits.splice(0, 1);
console.log(fruits);
fruits.splice(0, 1,'watermelon');
console.log(fruits);

// combine two arrays
const fruit2 = ['lemon', 'coconat'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.indexOf('apple'));

// includes
console.log(fruits.includes('melon'));
console.log(fruits.includes('apple'));

// lastIndexof
console.clear();
fruits.push('melon');
console.log(fruits);
console.log(fruits.indexOf('melon'));
console.log(fruits.lastIndexOf('melon'));
