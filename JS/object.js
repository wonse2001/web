

// 1. Literals and propertiess
const obj1 = {}; // 'object literal' sysntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const wonse = {name: 'wonse', age: 4};
print(wonse);

wonse.hasJob = true;
console.log(wonse.hasJob);

delete wonse.hasJob;
console.log(wonse.hasJob);

// 2. Computed properties
// key should be always string
console.log(wonse.name);;
console.log(wonse['name']);
wonse['hasJob'] = true;
console.log(wonse.hasJob);

function printVaule(obj, key) {
    console.log(obj[key]);
}
printVaule(wonse,'name');
printVaule(wonse,'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('wonse', 20);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in wonse);
console.log('age' in wonse);
console.log('random' in wonse);
console.log(wonse.random);

// 6. for..in vs for..of
// for (key in obj)

for (key in wonse) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'wonse', age: '20'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const fruit3 = { color: 'black'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);