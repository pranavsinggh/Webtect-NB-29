//! String
// Anything enclosed between '' (single quotes), "" (double quotes),
// ` ` (backticks) is called as string

// let s1 = 'Hello';
// let s2 = "How are you"
// let s3 = `I am fine`

//& String interpolation
// let name = "Saurabh";
// let age = 400;
// let gf = "Dingi";
// // console.log(
// //   "My name is " + name + ". My age is " + age + ". My girlfriend name is " + gf
// // );

// console.log(`My name is ${name}. My age is ${age}. My gf name is ${gf}`)

// let a = 10;
// let b = 20;
// console.log("Sum of " + a + " and " + b + " is " + a + b);
// console.log(`Sum of ${a} and ${b} is ${a+b}`)

//& String property
//~ length
// it is used to find the length of a string

// let str = "Hello world";
// console.log(`Length is ${str.length}`);     // Length is 11

//& String methods
//~ trimStart()
// It will remove the extra whitespace from the starting of string. It will return a new string, it will not update the original string.
// Syntax - string.trimStart();

// let str = "   Hello World   "
// console.log(str)            //   Hello World
// console.log(str.length)     // 17
// let newStr = str.trimStart();
// console.log(newStr)         // HelloWorld
// console.log(newStr.length)  // 14

//~ trimEnd()
// It will remove the extra whitespace from the ending of string. It will return a new string, it will not update the original string.
// Syntax - string.trimEnd();

// let str = "   Hello World   "
// console.log(str)            //   Hello World
// console.log(str.length);    // 17
// let newStr = str.trimEnd();
// console.log(newStr)         //   Hello World
// console.log(newStr.length)  // 14

//~ trim()
// It will remove the extra whitespace from the starting and ending of string. It will return a new string, it will not update the original string.
// Syntax - string.trim();

// let str = "   Hello World   "
// console.log(str)            //   Hello World
// console.log(str.length);    // 17
// let newStr = str.trim();
// console.log(newStr)         // Hello World
// console.log(newStr.length)  // 11

//~ toUpperCase()
// It is used to convert the string into uppercase. It will return a new updated string, it will not effect the original string.
// Syntax - string.toUpperCase();

// let str = "hello world";
// console.log(str.toUpperCase())
// console.log(str)         // HELLO WORLD

//~ toLowerCase()
// It is used to convert the string into lowercase. It will return a new updated string, it will not effect the original string.
// Syntax - string.toLowerCase();

// let str = "HELLO WORLD";
// console.log(str.toLowerCase())
// console.log(str)         // hello world

//~ charAt();
// It is used to find the character at particular index. It will retunr the character.
// Syntax - string.charAt(index)

// let str = "Hello world";
// console.log(str.charAt(10))      // d

//~ split
// It is used to split the string into an array, according to the separator. It will return a new array and not affect the original string
// Syntax - string.split("separator")

// let str = "Ram Shyam Ganshyam";
// let arr=str.split(" ")
// console.log(arr)         ["Ram","Shyam","Ganshyam"]

//~ replace
// It is used to replace the current string with new string at the first occurence only. It will not affect the original string and returns a new string
// Syntax -> string.replace("cuurent","new")

// let str = "I love java. I am learning java.";
// let newStr = str.replace("java", "javascript"); 
// console.log(newStr);     // I love javascript. I am learning java.

//~ replaceAll
// It is used to replace the current string with new string at all occurences. It will not affect the original string and returns a new string
// Syntax -> string.replaceAll("cuurent","new")

// let newStr2 = str.replaceAll("java", "javascript");
// console.log(newStr2);      // I love javascript. I am learning javascript.

//~ indexOf
// It is used to find the index of the string at the first occurence. It will return the index.
// Syntax -> string.indexOf("str")

// let str = "I love javascript. I am learning javascript";
// let index = str.indexOf("java");
// console.log(index);      // 7

//~ lastIndexOf
// It is used to find the index of the string at the last occurence. It will return the index.
// Syntax -> string.indexOf("str")

// let lastIndex = str.lastIndexOf("java");
// console.log(lastIndex);    // 33

//~ concat
// It is used to merge(concat or add) multiple strings into the current string. It will return a new string and not affect the original string
// Syntax -> s1.concat(s2,s3,s4,......)

// let s1 = "Hello ";
// let s2 = "How ";
// let s3 = "Are ";
// let s4 = "You";

// let s5 = s1.concat(s2, s3, s4);
// console.log(s5);     // Hello How Are You

//~ includes
// It is used to find wether the particular string is present in the main string or not. If present returns true otherwise returns false. Return type is boolean
// Syntax -> string.includes("str")

// let str="Javascript"
// let check=str.includes("Java")
// console.log(check)       // true

//~ substring
// It is used to extract the part of a string. It will not affect the original string and returns a new string.
// If starting index is greater the ending index, it will swap the indexes.
// Syntax -> string.substring(start,end);

//~ slice
// It is used to extract the part of a string. It will not affect the original string and returns a new string.
// It accepts negative index
// Syntax -> string.slice(start,end);

// Note -> In both end index is not included.

// let str="Hello how are you?"
// let newStr1=str.substring(6,9)
// console.log(newStr1)         // how
// let newStr2=str.slice(6,9)
// console.log(newStr2)         // how

// start index greater than end index
// let newStr1 = str.substring(9, 6);
// console.log(newStr1);        // how
// let newStr2 = str.slice(9, 6);
// console.log(newStr2);        // ""

// index is negative
// let newStr1 = str.substring(-12, -9);
// console.log(newStr1);        // ""
// let newStr2 = str.slice(-12, -9);
// console.log(newStr2);        // how