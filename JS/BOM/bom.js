// console.log(window) // Browser Object Model

//! Window properties
// console.log(window.document)
// console.log(window.screen)
// console.log(window.history)
// console.log(window.navigator)
// console.log(window.location)
// console.log(window.innerHeight)
// console.log(window.outerHeight)
// console.log(window.innerWidth)
// console.log(window.outerWidth)

// forward() , back() and go(+-numberOfPages)

// console.log(window.document)
// console.log(document)
// console.log(window.innerHeight)

//! Window methods
//~ alert()

// window.alert("Dont do this");
// let result=confirm("Do you want to do this");
// console.log(result)
// let name = prompt("Enter your name");
// console.log(name);
// open(
//   "https://www.amazon.in/s?k=laptop+under+35000&crid=1PIIFTM86P7A8&sprefix=laptop%2Caps%2C284&ref=nb_sb_ss_mvt-t11-ranker_1_6"
// );
// close()

// console.log("Start");
// for (let i = 0; i < 99999999999; i++){

// }
// console.log("End");

// console.log("Start");
// let id2 = setTimeout(() => {
//   console.log("asnychronus task");
// }, 2000);
// clearTimeout(id2);
// let id1 = setInterval(() => {
//   console.log("Execute again and again");
// }, 2000);
// setTimeout(() => {
//   console.log("Clearing the setInterval");
//   clearInterval(id1);
// }, 11000);

// console.log("End");

console.log("Start");

//~ setTimeout(callback_fn,timePeriod(milliseconds),[arguments])

//~ clearTimeout(timeoutId)
// let timeout=setTimeout(() => {
//   alert("Will not execute")
// },3000)
// clearTimeout(timeout)

//~ setInterval(callback_fn,timePeriod(milliseconds),[arguments])

//~ clearInterval(intervalId)
// let interval=setInterval(() => {
//   alert("Message appear every 3 sec")
// },3000)
// clearInterval(interval)


// setTimeout((name, age) => {
//   console.log("Hi",name,"my age is",age);
// }, 2000 , "pranav",10);

// let intervalId = setInterval(
//   (name, age) => {
//     console.log("Hi", name, "my age is", age);
//   },
//   2000,
//   "Pranav",
//   10
// );

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 10000);

let timeoutId = setTimeout(() => {
  console.log("I am a bomb");
}, 4000);

setTimeout(() => {
  clearTimeout(timeoutId);
}, 6000);

console.log("End");
