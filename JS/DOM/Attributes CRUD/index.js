let body = document.body;
// console.log(body)
let form = document.createElement("form");
body.appendChild(form);

let nameLabel = document.createElement("label");
nameLabel.innerText = "Name : ";
nameLabel.setAttribute("for", "name");
form.appendChild(nameLabel);

let nameInput = document.createElement("input");
form.appendChild(nameInput);

// Create -> setAttribute()
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "Enter name");

// Read -> getAttribute()
console.log(nameInput.getAttribute("id"));
console.log(nameInput.getAttribute("placeholder"));
console.log(nameInput.getAttribute("name"));

// Update -> setAttribute()
nameInput.setAttribute("placeholder", "Enter username");
nameInput.setAttribute("id", "username");
nameLabel.setAttribute("for", "username");

// Delete -> removeAttribute()
// nameInput.removeAttribute("placeholder")
// nameInput.removeAttribute("id")
// nameInput.removeAttribute("name")

// nameInput.setAttribute("class", "login");
// nameInput.setAttribute("class", "black");
// nameInput.setAttribute("class", "home");
// nameInput.setAttribute("class","login black home")

nameInput.classList.add("home")
nameInput.classList.add("black")
nameInput.classList.add("login")

nameInput.classList.remove("black")
nameInput.classList.remove("login")

nameInput.classList.toggle("black")
nameInput.classList.toggle("black")
nameInput.classList.toggle("black")
nameInput.classList.toggle("black")


console.dir(nameInput)