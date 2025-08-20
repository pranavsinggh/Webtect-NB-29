let product = [];
async function getData() {
  try {
    let respone = await fetch("https://fakestoreapi.com/products");
    let data = await respone.json();
    product = data;
    console.log(product);

    displayData(product);
  } catch (error) {
    console.log(error);
  }
}
getData();

function displayData(data) {
  let products = document.getElementById("products");
  products.innerHTML=""
  data.forEach(obj => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", obj.image);

    div.appendChild(image);

    let title = document.createElement("p");

    let titleContent = obj.title.split(" ").slice(0, 6).join(" ");
    title.innerText = titleContent;

    title.setAttribute("title", obj.title);
    title.classList.add("title");

    div.appendChild(title);

    let description = document.createElement("p");
    description.innerText = obj.description.slice(0, 60) + " ...";

    div.appendChild(description);

    description.classList.add("description");
    description.setAttribute("title", obj.description);

    let para = document.createElement("p");
    para.classList.add("para");
    let price = document.createElement("span");
    price.innerText = `Price - $${obj.price}`;

    para.appendChild(price);
    div.appendChild(para);

    let stars = document.createElement("span");
    let fillStars = Math.floor(obj.rating.rate);
    let halfStar = obj.rating.rate % 1 >= 0.5 ? 1 : 0;
    let emptyStars = 5 - fillStars - halfStar;

    for (let i = 1; i <= fillStars; i++)
      stars.innerHTML +=
        '<i class="fa-solid fa-star" style="color: #FFD43B;"></i>';

    for (let i = 1; i <= halfStar; i++)
      stars.innerHTML +=
        '<i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>';

    for (let i = 1; i <= emptyStars; i++)
      stars.innerHTML +=
        '<i class="fa-regular fa-star" style="color: #FFD43B;"></i>';

    stars.setAttribute("title", `Count - ${obj.rating.count}`);

    para.appendChild(stars);

    
    products.appendChild(div);
  });
}

let searchInput=document.getElementById("search")
searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  console.log(value)
  let filteredData = product.filter((obj) => {
    return obj.title.toLowerCase().includes(value)
  })

  displayData(filteredData)
})
