let body = document.body;
let navbar = document.createElement("nav");
body.appendChild(navbar);

let leftAside = document.createElement("aside");
let rightAside = document.createElement("aside");

navbar.appendChild(leftAside);
navbar.appendChild(rightAside);

let logo = document.createElement("img");
logo.setAttribute(
  "src",
  "https://images.seeklogo.com/logo-png/22/2/html5-with-wordmark-color-logo-png_seeklogo-224332.png"
);
leftAside.appendChild(logo);

let login = document.createElement("div");
let register = document.createElement("div");

login.innerText = "Login";
register.innerText = "Register";

rightAside.appendChild(login);
rightAside.appendChild(register);

navbar.style.height = "70px";
navbar.style.padding = "10px 50px";
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.alignItems = "center";
navbar.style.borderBottom = "1px solid black";

logo.style.height = "60px";

rightAside.style.display = "flex";
rightAside.style.gap = "20px";
rightAside.style.fontSize = "20px";

console.dir(navbar);
