//const base = prompt("ENTER THE BASE VALUE");
//const height = prompt("ENTER THE HEIGHT VALUE");

//const area = (base * height) / 2;
//console.log(`The area of the triangle is ${area}`);

const side1 = parseInt(prompt("ENTER THE SIDE 1 VALUE"));
const side2 = parseInt(prompt("ENTER THE SIDE 2 VALUE"));
const side3 = parseInt(prompt("ENTER THE SIDE 3 VALUE"));

const s = (side1 + side2 + side3)/2;
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of the triangle is ${area}`);