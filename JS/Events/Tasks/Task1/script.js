let counter = 0;

let addProducts = () => {
  counter++;
  let label = document.createElement("label");
  label.innerText = `Product ${counter}`;

  let nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Name");

  let quantityInput = document.createElement("input");
  quantityInput.setAttribute("placeholder", "Quantity");

  let priceInput = document.createElement("input");
  priceInput.setAttribute("placeholder", "Price");

  let div = document.createElement("div");
  div.appendChild(label);
  div.appendChild(nameInput);
  div.appendChild(quantityInput);
  div.appendChild(priceInput);

  let form = document.querySelector("form");
  form.appendChild(div);
};

addProducts();

let btn = document.querySelector("button");
btn.addEventListener("click", addProducts);


