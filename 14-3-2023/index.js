//Math Object
const sum = Math.random();
// console.log(sum);

//setTimeout()

const myTimeout = setTimeout(function () {
  //   console.log("Hello");
}, 3000);

clearTimeout(myTimeout);

//setInterval()
let count = 0;

const myInterval = setInterval(function () {
  console.log("Hello");
}, 1000);
