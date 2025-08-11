let handleClick = () => {
  console.log("Button clicked");
  alert("Button clicked");
};

let x = () => {
  console.log("Div clicked");
};

let div = document.querySelector("div");
let handleMouseEnter = () => {
  console.log("Mouse entered");
  div.style.backgroundColor = "black";
};
let handleMouseLeave = () => {
  console.log("Mouse leaved");
  div.style.backgroundColor = "white";
};
