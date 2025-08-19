let child = document.getElementById("child");

child.addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  },
  true
);

let parent = document.getElementById("parent");
parent.addEventListener(
  "click",
  () => {
    console.log("Parent clicked");
  },
  false
);

let grandParent = document.getElementById("grandParent");
grandParent.addEventListener(
  "click",
  () => {
    console.log("Grand parent clicked");
  },
  true
);

document.body.addEventListener(
  "click",
  () => {
    console.log("Body clicked");
  },
  false
);

document.addEventListener(
  "click",
  () => {
    console.log("Document clicked");
  },
  true
);

window.addEventListener(
  "click",
  () => {
    console.log("window clicked");
  },
  false
);
