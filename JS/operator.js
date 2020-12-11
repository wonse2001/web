'use strict';

// 1. String concatenation
console.log('my' +  ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // reminder
console.log(2 ** 3);  // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()} `);

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()} `);

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('i');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const wonse1 = {name: 'wonse'};
const wonse2 = {name: 'wonse'};
const wonse3 = wonse1;
console.log(wonse1 == wonse2);
console.log(wonse1 === wonse2);
console.log(wonse3 === wonse1);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// Conditional operators: if
// if, else if, else
const name = 'wonse';
if(name === 'wonse'){
    console.log('Welcome, wonse!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'wonse' ? 'Yes' : 'No');

// 10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do { 
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2 ) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// break, continue
// Q1, iterate from 0 to 10 and print only even numbers
// (use continue)

for(let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        console.log(`q1: ${i}`);
    }
}

// Q2, iterate from 0 to 10 and print numbers until reaching 8
// (use continue)

for(let i = 0; i < 10; i++) {
    if (i > 8){
        break;
    }
    console.log(`q2: ${i}`);
}