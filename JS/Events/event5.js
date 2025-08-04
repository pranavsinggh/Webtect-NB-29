let form = document.querySelector("form");
let btn = document.querySelector("button");

form.addEventListener("submit", event => {
  event.preventDefault();

  let inputs = document.getElementsByTagName("input");
  let labels = document.getElementsByTagName("label");

  for (let i = 0; i < inputs.length; i++) {
    console.log(labels[i].innerText, inputs[i].value);
  }
});
