//! Objects

//~ Create - {}
// let obj = {
//     // Empty object
// }

// let laptop = {
//   // Property
//   brand: "Asus",
//   price: 12000000,
//   os: "Windows",

//   //Methods
//   playGame() {
//     console.log("Playing game");
//   },
//   watchSerials() {
//     console.log("Watching serials");
//   },
//   watchMovies() {
//     console.log("Watching movies");
//   },
// };

// let obj = {
//     key: value,
//     key: value,
//     key: value,
//     .
//     .
//     .
//     n
// }

// Creation
let person = {
  name: "Gautam",
  age: 400,
  // gender: "Male",
  // wife: null,
  // children: ["Varun", "Tarun", "Marun"],
  // grandChildren: undefined,
  // married: true,
  // address: {
  //   streetNo: 420,
  //   city: "Chennai",
  //   state: "Tamilnadu",
  //   country: "India",
  // },
  // sleep() {
  //   console.log("Sleeping");
  // },
  // playing() {
  //   console.log(`${this.name} is playing cricket`);
  // },
};

//! Methods
//~ Object.keys()
// It will give a array of all the keys present in the passed object
// Syntax - Object.keys(objName)

// let keys = Object.keys(person);
// console.log(keys);  //['name', 'age']

//~ Object.values()
// It will give a array of all the values present in the passed object
// Syntax - Object.values(objName)

// let values = Object.values(person)
// console.log(values) //['Gautam', 400]

//~ Object.entries()
// It will give a nested array representing the passed object. Where each sub array first element will be key and second element will be value.
// Syntax - Object.entries(objName)

// let entries = Object.entries(person)
// console.log(entries)  //[['name','Gautam'],['age', 400]]

//~ Object.assign()
// It is used to merge the multiple objects together. It will merge all the passed objects into the first object, hence the first object get updated.
// To prevent the first object from updating we can pass empty object as first object.
// Syntax - Object.assign(storing, object, object.....)

let obj1 = {
  name: "Pranav",
};
let obj2 = {
  age: 10,
};
let obj3 = {
  language: "Java",
  age: 20,
};

let obj = Object.assign(obj1, obj3, obj2);
// let obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);
// console.log(obj3);
// console.log(obj2);
// console.log(obj1);

//~ Object.seal()
// It is used to prevent addition and deletion of properties to the object. We can update the properties
// Syntax - Object.seal(objName)
//~ Object.isSealed()
// It will check wether the object is sealed or not. If sealed it returs true, else false.
// Syntax - Object.isSealed(objName)

// Object.seal(obj)
// console.log(Object.isSealed(obj))
// // Adding ❌
// obj.wife = "Alia";
// console.log(obj);
// // Deleting ❌
// delete obj.age;
// console.log(obj);
// // Updation ✅
// obj.age = 20;
// console.log(obj)

//~ Object.freeze()
// It is used to prevent addition , deletion and updation of properties to the object.
// Syntax - Object.freeze(objName)
//~ Object.isFrozen()
// It will check wether the object is frozen or not. If frozen it returs true, else false.
// Syntax - Object.isFrozen(objName)

// Object.freeze(obj)
// console.log(Object.isFrozen(obj))
// // Adding ❌
// obj.wife = "Alia";
// console.log(obj);
// // Deleting ❌
// delete obj.age;
// console.log(obj);
// // Updation ❌
// obj.language = "javascript";
// console.log(obj);

//~ hasOwnProperty
// It is used to check wether the particular property present in the object or no. If present returns true else false
// Syntax - objectName.hasOwnProperty("property")

console.log(obj.hasOwnProperty("age"));    //true
console.log(obj.hasOwnProperty("wife"));    //false

// Accessing/Reading
//~ Dot notation (.)
// console.log(person);
// console.log(person.name);
// console.log(person.married);
// console.log(person.children);
// console.log(person.address.city);
// console.log(person.sleep())
// person.sleep();
// console.log(person.children[2]);
// console.log(person.address.country);
// person.playing();

// Update
// person.age = 100;
// console.log(person);
// console.log(person.wifeName);
// person.wifeName="Katrina"
// console.log(person.wifeName)
// console.log(person)

// Delete
// delete person.wife
// delete person.address.country
// delete person.sleep
// console.log(person)
