let btn = document.querySelector("button");

btn.addEventListener("click", event => {
  console.log(event);             
  console.log(event.currentTarget);
});

let div = document.querySelector("div");

div.addEventListener("mouseenter", e => {
  console.log(e);
  div.style.backgroundColor = "blue";
});
div.addEventListener("mouseleave", e => {
  console.log(e);
  console.log(e.currentTarget);
  div.style.backgroundColor = "red";
});

let anchor = document.querySelector("a");

anchor.addEventListener("click", e => {
  e.preventDefault();             // Prevents the default nature of acnhor tag
  console.log(e);                 // Event object
  console.log(e.currentTarget);   // The current element on which event occured
  console.log(e.type)             // Click
});
