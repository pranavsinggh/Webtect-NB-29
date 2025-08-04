let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("Button clicked");
// });

// btn.addEventListener("click", () => {
//   console.log("How are you?");
// });

// btn.addEventListener("click", () => {
//   console.log("How was the date?");
// });

// let counter = 1;
// btn.onclick = () => {
//   console.log(counter);
//   counter++;
//   console.log("Button clicked");
//   console.log("How are you?");
//   console.log("How was the date?");
// };

let counter = 0;

let fn1 = () => {
  counter++;
  console.log("Button clicked");

  if (counter >= 5) {
    btn.removeEventListener("click", fn1);
  }
};
btn.addEventListener("click", fn1);

btn.addEventListener("click", () => {
  console.log(counter);
  console.log("How are you?");
});

btn.addEventListener("click", () => {
  console.log("How was the date?");
});
