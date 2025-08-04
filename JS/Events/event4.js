let btn = document.querySelector("button");

let form = document.querySelector("form");

btn.addEventListener("click", () => {
  let div = document.createElement("div");

  let itemLabel = document.createElement("label");
  itemLabel.innerText = "Item ";

  div.appendChild(itemLabel);

  let itemInput = document.createElement("input");
  itemInput.setAttribute("placeholder", "Enter item");

  div.appendChild(itemInput);

  let quantityLabel = document.createElement("label");
  quantityLabel.innerText = "Quantity ";

  div.appendChild(quantityLabel);

  let quantityInput = document.createElement("input");
  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("placeholder", "Enter quantity");

  div.appendChild(quantityInput);

  let priceLabel = document.createElement("label");
  priceLabel.innerText = "Price ";

  div.appendChild(priceLabel);

  let priceInput = document.createElement("input");
  priceInput.setAttribute("type", "number");
  priceInput.setAttribute("placeholder", "Enter price");

  div.appendChild(priceInput);

  form.appendChild(div);
});
