// let obj = {
//   name: "Pranav",
//   age: 10,
//   skills: ["Html", "Css", "js"],
//   address: {
//     country: "India",
//   },
//   grandChildren: null,
//   isMarried: true,
//   play() {
//     console.log("playing");
//   },
// };

// console.log(obj);
//! JSON methods
//~ JSON.stringify(javascriptObject)
// It is used to convert the javascript object into the json format.

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

//~ JSON.parse(jsonData)
// It is used to convert the json format into the javascript object.

// let jsObj = JSON.parse(jsonObj);
// console.log(jsObj);

// const jsonData = `[
//   {
//     "name": "Virat Kohli",
//     "role": "Batsman",
//     "age": 36,
//     "matches": 292,
//     "runs": 13848,
//     "wickets": 4
//   },
//   {
//     "name": "Rohit Sharma",
//     "role": "Batsman",
//     "age": 38,
//     "matches": 262,
//     "runs": 10709,
//     "wickets": 8
//   },
//   {
//     "name": "Jasprit Bumrah",
//     "role": "Bowler",
//     "age": 31,
//     "matches": 133,
//     "runs": 215,
//     "wickets": 348
//   },
//   {
//     "name": "Ravindra Jadeja",
//     "role": "All-Rounder",
//     "age": 36,
//     "matches": 296,
//     "runs": 3096,
//     "wickets": 493
//   },
//   {
//     "name": "Shubman Gill",
//     "role": "Batsman",
//     "age": 26,
//     "matches": 74,
//     "runs": 3702,
//     "wickets": 0
//   }
// ]`;

// let jsObj = JSON.parse(jsonData);

// console.log(jsObj);

// jsObj.forEach(element => {
//     console.log(element.name)
// });

// let roles = jsObj
//   .map(element => element.role)
//   .filter((ele, ind, arr) => arr.indexOf(ele) == ind);
// console.log(roles);
