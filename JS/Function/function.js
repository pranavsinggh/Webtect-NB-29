//! Named function
// add(10,20)
// function add(a, b) {
//   console.log(a + b);
// }
// add(10, 20);
// console.log(typeof add)

//! Anonymous function
// let add = function (a, b)
// {
// 	console.log(a+b)
// }
// console.log(typeof add)
// add(10,20)

//! First class function / First citizen function

// add(10, 20);
// let add = function (a, b) {
//   console.log(a + b);
// };

// sum(10, 20);  -> Error as it is stored in variable not in function name

//! Arrow function

// let add = (a, b) => {
//   console.log(a + b);
// };
// add(10, 20);

// function add(a, b) {
//   return a + b;
// }

// Implicit return
// let add = (a, b) => a + b;

// console.log(add(10, 20));

// let sqr = x => x * x;

//! IIFE
// Syntax -> (function)(arguments);

// (db => {
//   console.log(`${db} connected`);
// })("Oracle");

// Memory is wastage. Can not reuse it
// let counter = 5;
// for (let i = counter; i > 0; i--)
//   console.log(i)

// (function () {
//   let counter = 5;
//   for (let i = counter; i > 0; i--)
//     console.log(i);
// })();

//! Higher order function and callback function

//~ First scenario - accepts as argument
// let add = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let mul = (a, b) => a * b;
// let div = (a, b) => a / b;

// let calcuator = (a, b, opperation) => {
//   return opperation(a, b);
// };
// console.log(calcuator(10, 20, add));
// console.log(calcuator(20, 10, sub));

//~ returns a function
// function greetGenerator(greeting) {
//   return function generate(name) {
//     return `${greeting}, ${name}`;
//   };
// }

// let generate1 = greetGenerator("Hi");
// console.log(generate1("Pranav"));
// console.log(generate1("Tabrez"));
// console.log(generate1("Nikhil"))

// let generate2 = greetGenerator("Bye");
// console.log(generate2("Nagraj"));

//! Nested function
// var a = 10;
// let b = 20;
// const c = 30;

// function parent() {
//   var d = 40;
//   let e = 50;
//   const f = 60;

//   console.log(a, b, c, d, e, f);

//   function child() {
//     var p = 100;
//     let q = 200;
//     let r = 300;

//     console.log(p, q, r);

//     function grandChild() {
//       console.log(p, q, r);
//       console.log(d, e, f);
//       console.log(a, b, c);
//     }

//     grandChild();
//   }

//   child();
// }
// parent();

// console.log(a, b, c, d, e, f); Error

let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();
