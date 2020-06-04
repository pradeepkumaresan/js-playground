console.log(a); // Undefined. Declared but not initialized
console.log(b); // Undefined. Declared but not initialized
//console.log(c); // Undeclared. RefError
var a = b;
var b = 2;
console.log(b);
console.log(a);