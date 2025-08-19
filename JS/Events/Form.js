// let btn = document.querySelector("button");

// btn.addEventListener("click", e => {
//   e.preventDefault();
//   console.log(e);
//   console.log("Form submitted");
// });

let form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  let username = document.getElementById("username");

  let email = document.getElementById("email");

  let password = document.getElementById("password");

  let contact = document.getElementById("contact");

  let address = document.getElementById("address");

  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
    contact: contact.value,
    address: address.value,
  };

  console.log(obj);

  username.value = "";
  email.value = "";
  contact.value = "";
  password.value = "";
  address.value = "";
});
