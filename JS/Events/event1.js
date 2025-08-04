// let btn = document.querySelector("button");
// console.dir(btn);

// let handleClick = () => {
//   console.log("Clicked");
// };

// btn.onclick = handleClick;

// let div = document.querySelector("div");
// console.dir(div);

// div.innerText;

// div.onmouseenter = () => {
//   console.log("Mouse entered in the div");
// };
// div.onmouseleave = () => {
//   console.log("Mouse leaved the div");
// };
// div.onclick = () => {
//   console.log("Button clicked");
// };

// div.onclick = () => {
//     console.log("Hello how are you?")
// }

// let a = 10;
// a = 20;

let counter = 0;
let text = document.querySelector("b");
text.innerText = counter;

let btn = document.querySelector("button");

let increment = () => {
  counter++;
  text.innerText = counter;

  if (counter == 10) {
    alert("Limit reached");
    btn.removeEventListener("click", increment);
  }
};
btn.addEventListener("click", increment);
