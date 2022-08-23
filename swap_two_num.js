//using Temporary variable

/*let a = prompt("ENTER THE FIRST VALUE");
let b = prompt("ENTER THE SECOND VALUE");

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value a after swap ${a}`);
console.log(`The value b after swap ${b}`);*/

//Using es6(ES2015) Destructuring assignment

/*let a = prompt("ENTER THE FIRST VALUE");
let b = prompt("ENTER THE SECOND VALUE");

[a,b] = [b,a];

console.log(`The value a after swap ${a}`);
console.log(`The value b after swap ${b}`);*/

//Using Arithmetic Operators

/*let a = parseInt(prompt("ENTER THE FIRST VALUE"));
let b = parseInt(prompt("ENTER THE SECOND VALUE"));

a = a + b;
b = a - b;
a = a - b;

console.log(`The value a after swap ${a}`);
console.log(`The value b after swap ${b}`);*/

//Using Bitwise XOR operator

let a = parseInt(prompt("ENTER THE FIRST VALUE"));
let b = parseInt(prompt("ENTER THE SECOND VALUE"));

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`The value a after swap ${a}`);
console.log(`The value b after swap ${b}`);