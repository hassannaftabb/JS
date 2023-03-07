let person = {
  name: "hassan",
  class: 11,
  isMarried: false,
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
//Object.keys - return all keys
console.log(Object.keys(person));
//Object.values - return all values
console.log(Object.values(person));

//Object.enteries - returns all key-value pairs as arrays
console.log(Object.entries(person));

//Object.assign
console.log(
  Object.assign(person, {
    test: true,
    new: "hcvdv",
  })
);

//Arrays

let myArray = [1, 2, "3", 4, { name: "hassan" }, 6, [1, 4, 5], true, 9, 0];
console.log(myArray);
