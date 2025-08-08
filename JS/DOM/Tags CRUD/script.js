//CRUD
//! Create
//~ createElement()

// let e1=document.createElement("p")
// console.log(e1)

// let e2=document.createElement("h1")
// console.log(e2)

// let e3=document.createElement("aside")
// console.log(e3)

//~ appendChild()
//~ parent.appendChild(child)

// let body=document.querySelector("body")
// console.log(body)
// body.appendChild(e3)

// e3.appendChild(e2)
// e2.appendChild(e1)

// let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.innerText);

// h1.innerText = "I know DOM";
// console.log(h1.innerText);

// let h2 = document.querySelector("h2");
// console.log(h2);
// console.log(h2.innerText);

// h2.innerText = "CRUD of HTML attributes";

// let h3 = document.querySelector("h3");
// h3.innerText = "<u>Teach me</u>";
// h3.innerHTML = "<u><i>Teach me</i></u>";
// console.log(h3.innerHTML);
// h3.innerHTML = "<q>Understood</q>";

let h1 = document.createElement("h1");

h1.innerText = "Created using js";

document.body.appendChild(h1);

let h2 = document.createElement("h2");
h2.innerText = "Replaced h1";

document.body.replaceChild(h2, h1);

let h3 = document.createElement("h3");
console.log(h3);
h3.innerText = "Replace h2";

document.body.replaceChild(h3, h2)

document.body.removeChild(h3)
document.body.appendChild(h1)
document.body.removeChild(h1)
