//JavaScript Objects
//Object consits of key-value pairs.
var person = {
  name: "Hassan",
  class: 11,
  age: 17.3,
  greet: function () {
    console.log(`Hello, ${this.age}`);
  },
};

var fruits = {
  summer: {
    mango: "sweet",
    banana: "sweet",
    eat: function () {
      console.log("Eating.." + this.mango);
    },
  },
  winter: {
    orange: "sour",
  },
};

//4 objects
//this keyword, functions as properties for both nested
//and simple objects.
//understand local and global scope
