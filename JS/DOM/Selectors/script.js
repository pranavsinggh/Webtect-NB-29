//!DOM selectors

//~ document.getElementById("idName")
// let element1 = document.getElementById("first");
// console.log(element1);

// let element2 = document.getElementById("second");
// console.log(element2);

// let element3 = document.getElementById("third");
// console.log(element3);

//~ document.getElementsByClassName("className")
// let elements = document.getElementsByClassName("one");
// // Array like object

// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

//~ document.getElementsByTagName("tagName")  -> Array like object
// let h2 = document.getElementsByTagName("h2");
// console.log(h2);

// let h1=document.getElementsByTagName("p")
// console.log(h1)

//~ docuemnt.querySelector("cssSelector")
// let first = document.querySelector("#first");
// console.log(first);

// let third = document.querySelector("#third");
// console.log(third);

// let one = document.querySelector(".one");
// console.log(one);

// let h2 = document.querySelector("h2");
// console.log(h2);

// let p = document.querySelector("div>p");
// console.log(p);

//~ document.querySelectorAll("cssSelector")
let one = document.querySelectorAll(".one")
console.log(one)
console.log(one[0])
console.log(one[2])

let h2=document.querySelectorAll("h2")
console.log(h2)

let p=document.querySelectorAll("div>p")
console.log(p)

