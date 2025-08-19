// p1.then(data => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// });

//! asnyc and await
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I am rejected");
//   }, 2000);
// });
// async function handle() {
//   try {
//     let data = await p1;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// handle();

async function getData() {
  try {
    let res = await fetch("https://api.github.com/users");    // Making request
    let data = await res.json();                              // Getting the data
    console.log(data);    // Array of objects

    // Displaying data
    data.forEach((elements, index) => {
      console.log(elements);

      let img = document.createElement("img");
      img.setAttribute("src", elements.avatar_url);

      document.body.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
}
getData();
