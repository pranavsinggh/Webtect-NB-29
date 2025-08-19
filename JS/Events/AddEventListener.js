let x = document.querySelector("button");

// x.addEventListener("click", () => {
//   console.log("button clicked");
// });

// x.addEventListener("mouseenter", () => {
//   console.log("Mouse entered");
// });

// x.addEventListener("mouseleave", () => {
//   console.log("Mouse left");
// });
let fn3 = () => {
  console.log("Button clicked");
};
let fn1 = () => {
  console.log("Clicking the button");
};
let fn2 = () => {
  console.log("Button clicked by me");
};
x.addEventListener("click", () => {
  console.log("Event handled");
});
x.addEventListener("click", fn2);
x.addEventListener("click", fn3);

setTimeout(() => {
  x.removeEventListener("click", fn3);
}, 3000);

setTimeout(() => {
  x.removeEventListener("click", fn2);
}, 6000);


