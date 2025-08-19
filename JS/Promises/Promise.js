// //! Promise -> Eventual completion of an asyncrhonus operation

// //~ Create

// let age = prompt("Enter age");
// let p1 = new Promise((resolve, reject) => {
//   if (age >= 18) resolve("Eligible to vote");
//   else reject("Not eligible to vote");
// });

// //~ Handling
// // then -> resolved
// // catch -> reject
// // finally

// p1.then(data => {
//   console.log(data);
//   console.log("Fulfilled state");
// })
//   .catch(error => {
//     console.log(error);
//     console.log("Rejected state");
//   })
//   .finally(() => {
//     console.log("finally ");
//   });

let p = fetch("https://api.github.com/users");  // Making api cal

p.then(data => {            // handling fulfilled state
  let res = data.json();    // Converts response to object 

  res
    .then(data => {
      console.log(data);    // Uses the data
    })
    .catch(error => {       // Hanldes error
      console.log(error);
    });
}).catch(error => {         // Handles error
  console.log(error);
});

// myPromise
//   .then(message => console.log("Success:", message))
//   .catch(error => console.log("Error:", error))
//   .finally(() => console.log("Promise Completed!"));

// Syntax -   fetch("url")
