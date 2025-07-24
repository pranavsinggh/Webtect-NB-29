console.log("Variable declaration");

// a = 10
// console.log(a)
//! var declaration
// var a = 10      // Declaration + Initialization
// console.log(a)

// var b;          // Declaration -> value will be undefined
// console.log(b)

// b = 20;         // Initialization
// console.log(b)

// b = 30;         // Re-initialization
// console.log(b)

// var b = 100;    // Re-declaration
// console.log(b)

//! let declaration
// let a = 10;     // Declaration + Initialization ✅
// console.log(a)

// let b;          // Declaration                  ✅
// console.log(b)

// b = 20;         // Initialization               ✅
// console.log(b)

// b = 30          // Re-initialization            ✅
// console.log(b)

// let a = 100;    // Re-declaration               ❌
// console.log(a)

//! const declaration
// const a = 10;      // Declaration + Initialziation      ✅
// console.log(a)

// const b;           // Declaration                       ❌
// console.log(b)

// b = 10;            // Initialization                    ❌
// console.log(b)

// a = 20;            // Re-initialization                 ❌
// console.log(a)

// const a = 20;       // Re-declaration                   ❌
// console.log(a)

//! scope - define the visibilty

var a = 20;
let b = 30;
const c = 40;

aa = 1000;

var x = 100;
let y = 200;
const z = 300;

console.log(a, b, c);
console.log(x, y, z);
