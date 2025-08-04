let counter = 0;
let value = document.querySelector("b");
value.innerText = counter;

let increment = () => {
  counter++;
  value.innerText = counter;

  if (counter >= 10) {
    alert("Limit reached");
    btn.removeEventListener("click", increment);
  }
};

let btn = document.querySelector("button");
btn.addEventListener("click", increment);
