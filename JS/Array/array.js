//! Array
// Collection of data at continous memory allocations
// Syntax -> []
// let babyNames = ["Katrina", "Kiara", "Alia", "Shraddha", "Vamika"];
// console.log(babyNames)

// let array = [true, 10, "Hello", null, undefined];
// console.log(array)

// Empty array
// let arr = [];
// console.log(arr)

// arr[0] = "Alia";
// console.log(arr)
// arr[1] = "Katrina"
// console.log(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[100]);
// arr[100]="Vamika"
// console.log(arr)
// arr[10000]="Hello"
// console.log(arr)

//~ CRUD on array
//& Create -> []
// let arr = [10, 20, 30, 40, 50];

// //& Read -> with the help of index
// console.log(arr[0])
// console.log(arr[3])

// //& Update -> accees the element and provide a new value
// arr[0]=100
// console.log(arr)

// //& Delete -> we can delete elements not index, using delete
// delete arr[0]
// console.log(arr)

//~ Properties
//& length
// It is used to find the length of the array.
// Syntax -> array.length

// let arr =[10,20,30,40,50]
// console.log(arr.length)     //5

// //~ Traverse -> For loop
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i])

//~ Methods
//& pop
// It is used to remove the last element of the array. It will update the original array and returns the removed element
// Syntax -> array.pop();

// let arr = [10, 20, 30, 40]
// let result=arr.pop();
// console.log(arr)    //[10, 20, 30]
// console.log(result) //40

//& push
// It is used to add element at the last of the array. It will update the original array and returns the new length of the array.
// Syntax -> array.push(element)

// let arr = [10, 20, 30, 40];
// let result=arr.push(100)
// console.log(arr)        // [10, 20, 30, 40, 100]
// console.log(result)     // 5

//& shift
// It is used to remove the first element of the array. It will update the original array and returns the removed element
// Syntax -> array.shift();

// let arr = [10, 20, 30, 40];
// let result=arr.shift()
// console.log(arr)        // [20, 30, 40]
// console.log(result)     // 10

//& unshift
// It is used to add element at the first of the array. It will update the original array and returns the new length of the array.
// Syntax -> array.unshift(element)

// let arr = [10, 20, 30, 40];
// let result=arr.unshift(0)
// console.log(arr)        // [0, 10, 20, 30, 40]
// console.log(result)     // 5

//& slice
// It is used to extract a part of the array. It will not update the original array, instead it returns a new extracted array.
// Syntax -> array.slice(start,end)

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let newArr=arr.slice(1, 5)
// console.log(arr)    // [10, 20, 30, 40, 50, 60, 70]
// console.log(newArr) // [20, 30, 40, 50]

//& splice
// It is used to modify the array. It will return a array of removed element and updates the array.
// Syntax -> array.splice(startIndex , deleteCount , ?elements to be added)

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let result = arr.splice(2, 1, 100, 200, 300);
// console.log(arr);       // [10, 20, 100, 200, 300, 40, 50, 60, 70]
// console.log(result);    // [30]

//~ filter
// arr.filter((element, index, array) => {
//   console.log(element, index, array);
// });

//Syntax - array.filter((element,index,array)=>{
//                          return boolean
//                     })

// let arr = [1, 2, 3, 4, 5, 6];
// let even = arr.filter(function (e) {
//     return e % 2 == 0
// });
// console.log(arr)    // [1, 2, 3, 4, 5, 6];
// console.log(even);  // [2, 4, 6];

// let odd = arr.filter((e, i) => i % 2 != 0);
// console.log(odd)    // [2, 4, 6];

//~ map
// let arr = [10, 20, 30, 40, 50, 60];

// let sqr = [];
// for (let i = 0; i < arr.length; i++) {
//   let s = arr[i] ** 2;
//   sqr.push(s);
// }
// console.log(arr);
// console.log(sqr);

// Synatx -  arr.map((element, index, array) => {
//                      return UpdatedValue
//                  });

// let arr = [10, 20, 30, 40, 50, 60];
// let sqr=arr.map((e) => {
//     return e ** 2;
// })
// console.log(arr)
// console.log(sqr)

// let radius = [2, 5, 10, 15, 30];

// let circumfrence = radius.map(e => 2 * 3.14 * e);
// console.log(radius)
// console.log(circumfrence);

//~ reduce
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// Syntax -  arr.reduce((accumulator,element,index,array) => {
//                            return value
//                      },[initialValue])

// let arr = [10, 20, 30, 40, 50, 60];
// let sum = arr.reduce((acc, e, i, a) => {
//   console.log(acc, e, i, a);
//   return acc + e;
// });
// console.log(sum);

// let prod = arr.reduce((acc,e) => {
//     return acc * e
// })
// console.log(prod)

// let arr = [10, 20, 30, 40, 50, 60];
// let sum = arr.reduce((acc, e, i, a) => {
//   console.log(acc, e, i, a);
//   return acc + e;
// }, 100);
// console.log(sum);

//~ sort
// It is method which is used to sort the array. It updates the original array.
// Syntax -> array.sort();

// let arr = [4, 9, 1, 8, 2, 5];
// console.log(arr);
// arr.sort();
// console.log(arr);

//& lexicographically order (alphabet order)
// let arr = [1, 200, 2, 100, 1000, 4, 7, 600];
// arr.sort();
// console.log(arr);

// let arr = [1, 200, 2, 100, 1000, 4, 7, 600];
// console.log(arr);

// Ascending order
// arr.sort((a, b) => a - b);
// console.log(arr);

// Descending order
// arr.sort((a, b) => b - a);
// console.log(arr);

//~ forEach
// It is used to traverse the array.
// Syntax -> array.forEach((element,index,array)=>{
//                Task
//            })

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((e, i, a) => {
//   console.log(e, i, a);
// });

//~ reverse
// It is used to reverse the array. It will update the original array
// Syntax -> array.reverse()

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);   //[1, 2, 3, 4, 5]
// arr.reverse();
// console.log(arr);   //[5, 4, 3, 2, 1]

//~ join
// It is used to merge the array elements into a string. It will not update the original array, instead it returns a string
// Syntax -> array.join(separator)

// let serials = ["Saravanan", "Roja", "Kolangal", "Mettioli"];
// let str = serials.join("❤️");
// console.log(str);   //Saravanan❤️Roja❤️Kolangal❤️Mettioli

//~ concat
// It is used to merge mutliple arrays into a single array. It will return a new array and will not update the orginal array
// Syntax -> arr1.concat(arr2,arr3,arr4.......)

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let arr3 = [70, 80, 90];

// let a = arr1.concat(arr3, arr2);
// console.log(a); //[10, 20, 30, 70, 80, 90, 40, 50, 60]

//~ includes
// It is used to check wether the element is present in the array or not. It returns boolean data.
// Syntax -> array.includes(element)

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.includes(30))   // true
// console.log(arr.includes(100))  // false

//~ indexOf
// It is used to find the first index of the element in the array. It will return the index value.
// Syntax -> array.indexOf(element)

//~ lastIndexOf
// It is used to find the last index of the element in the array. It will return the index value.
// Syntax -> array.lastIndexOf(element)

// If element not present both returns -1

let arr = [10, 20, 30, 50, 10, 60, 30, 20, 10];
console.log(arr.indexOf(20));       // 1
console.log(arr.lastIndexOf(10));   // 8
console.log(arr.indexOf(0));        // -1
