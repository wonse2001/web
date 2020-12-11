'use strict';

// 1. Function declaration
function printHello() {
    console.log('Hello');
}
printHello();

function log(message){
    console.log(`${message} type: ${typeof message}`);
}
log('hello world ~!');
log(12 + 34 ) ;

// 2. Parameters
// premitive parameters: passed by value
// object paramemters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const wonse = {name: 'wonse'};
changeName(wonse);
console.log(wonse);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('HI');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg))
}
printAll('dream' , 'coding' , 'wonse');

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() { 
    let message = 'hello';  
    console.log(message);   // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum (a, b) {
    return a + b;
}
const result = sum(5, 5);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// Function Expression - First class function
const print = function() {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgagin = sum;
console.log(sumAgagin(1, 3));

// 8. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function() { // anonymous function
    console.log('Yes!');
}

const printNo = function print() { // named function
    console.log('No!');
    
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous


const simplePrint = () => console.log('simplePrint!');
simplePrint();
const add = (a, b) => a + b;
console.log(`add : ${add(10, 20)}`)

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;            
        case 'substract':
            return a - b;            
        case 'divide':
            return a / b;           
        case 'multiply':
            return a * b;            
        case 'remainder':
            return a % b;           
        default:
            console.log('unkwnon')
    }
}
console.log(calculate('add', 3, 5));
console.log(calculate('substract', 3, 5));
console.log(calculate('divide', 3, 5));
console.log(calculate('multiply', 3, 5));
console.log(calculate('remainder', 3, 5));

