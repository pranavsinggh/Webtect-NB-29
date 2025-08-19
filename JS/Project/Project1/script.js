async function getData() {
  try {
    let respone = await fetch("https://fakestoreapi.com/products");
    let data = await respone.json();
    console.log(data);

    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

function displayData(data) {
  data.forEach(obj => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", obj.image);

    div.appendChild(image);

    let title = document.createElement("p");

    let titleContent = obj.title.split(" ").slice(0, 6).join(" ");
    console.log(titleContent);
    title.innerText = titleContent;

    div.appendChild(title);

    let products = document.getElementById("products");
    products.appendChild(div);
  });
}
