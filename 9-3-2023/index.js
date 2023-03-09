//return keryword
function sum(a, b) {
  let sum = a + b;
  return sum;
}

const sumOfTwoNumbers = sum(1, 3);

//break and continue
let array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
  if (index == -2) {
    break;
  }
}

//array iteration
let newArray = ["hammad", "hassan", "ayesha", "mishal"];
newArray.forEach(function (item) {
  console.log(item);
});

let objArray = [
  { name: "hassan", id: 1 },
  { name: "hammad", id: 2 },
  { name: "mishal", id: 3 },
  { name: "ayesha", id: 4 },
];

const namesArray = objArray.map(function (item) {
  return item.name;
});

// console.log(namesArray);

let newNamesArray = [];
for (let index = 0; index < objArray.length; index++) {
  newNamesArray.push(objArray[index].name);
}

// console.log(newNamesArray);

//filter method
const filteredArray = objArray.filter(function (item) {
  return item.name === "mishal" || item.name === "hammad";
});

// console.log(filteredArray);

let filArray = [];
for (let index = 0; index < objArray.length; index++) {
  if (objArray[index].name === "mishal" || objArray[index].name === "hammad") {
    filArray.push(objArray[index]);
  }
}

// console.log(filArray);

//reverse function
console.log(objArray.reverse());

//pop method
objArray.pop();
console.log(objArray);
