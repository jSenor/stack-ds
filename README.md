# stack-str
A complete implementation of the stack data structure :-)
## Instalation
npm install stack-str
## Usage
var stack = require("stack-str");
var numbers = new stack();
numbers.push(1); 
console.log(numbers) // [1];

numbers.push(2, 3, 4, 5, 7);
console.log(numbers) // [1, 2, 3, 4, 5, 7];

numbers.pop();
console.log(numbers) //[1, 2, 3, 4, 5, 6];