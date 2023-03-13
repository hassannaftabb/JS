//TERNAY OPERATORS

let condition = 5 > 3;

let myVar = condition ? "Hassan" : "Hammad";

// if (condition) {
//   myVar = "Hassan";
// } else {
//   myVar = "Hammad";
// }
// console.log(myVar);

// SPREAD OPERATOR (...)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const array = [...arr, 10, 11, 12, 13, 14, 15];

// console.log(array);

let firstObj = {
  name: "hassan",
  class: 11,
};

let secondObj = {
  ...firstObj,
  gender: "male",
};

// console.log(secondObj);

//DESTRUCTRING

let newObj = {
  name: "djfuf",
  Class: 1,
};

const { Class } = newObj;

console.log(Class);

//.then, .catch
//try catch
//Promises
//Conditional Mark For objects
