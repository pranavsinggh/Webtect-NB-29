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
//element.setAttribute("attribute","value")
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "Enter name");

// Read -> getAttribute()
//element.getAttribute("attribute")
console.log(nameInput.getAttribute("id"));          // name
console.log(nameInput.getAttribute("placeholder")); // Enter name
console.log(nameInput.getAttribute("name"));

// Update -> setAttribute()
nameInput.setAttribute("placeholder", "Enter username");
nameInput.setAttribute("id", "username");
nameLabel.setAttribute("for", "username");

// Delete -> removeAttribute()
// element.removeAttribute()
// nameInput.removeAttribute("placeholder")
// nameInput.removeAttribute("id")
// nameInput.removeAttribute("name")

// nameInput.setAttribute("class", "login");
// nameInput.setAttribute("class", "black");
// nameInput.setAttribute("class", "home");

// to add the classes to the element we use classList.add("class")
nameInput.classList.add("home")
nameInput.classList.add("black")
nameInput.classList.add("login")

// to remove the classes from the element we use classList.remove("class")
nameInput.classList.remove("black")
nameInput.classList.remove("login")

// to toggle between the classes (if not present add, if present remove) we use classList.toggle("class")
nameInput.classList.toggle("black")     // Add
nameInput.classList.toggle("black")     // Remove
nameInput.classList.toggle("black")     // Add
nameInput.classList.toggle("black")     // Remove
