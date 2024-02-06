"use strict";
// Task 1
const getting = "Hello, TypeScript!";
console.log(getting);
// Task 2
function mult(x, y) {
    return x * y;
}
console.log(mult(2, 10));
// Task 3
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));
function greetUser(person) {
    return `Hello, ${person.name}!`;
}
let user = { name: 'Tatyana', age: 35 };
console.log(greetUser(user));
// Task 5
function filterPositiveNumbers(numbers) {
    return numbers.filter(num => num > 0);
}
console.log(filterPositiveNumbers([1, -5, 2, 10, -3, -7, 7]));
