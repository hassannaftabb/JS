//LOGICAL OPERATORS

//LOGICAL AND OPERATOR (&&)
//All condiitions in AND should be true in order to get a True as an answer
console.log(true && true && true && false);

//LOGICAL OR OPERATOR (||)
// Only one condition should be true in OR, in order to get a True as an answer
console.log(false || true || false || false);

//LOGICAL NOT OPERATOR (!)
console.log(!false);

//Usage of Logical and Relational operators

let a = 10;
let b = 14;
let c = 15;
let d = 10;
//Return true only if all conditions are true
console.log(b === c && a === d);
//Return true if even condtion is true
console.log(b === c || a === d);
//Reverse the result
console.log(!(a === d) && b === c);

//IF ELSE STATEMENTS OR CONDITIONAL STATEMENTS OR ELSE IF STATMENTS

if (!(a === d) && b === c) {
  console.log("condition 1 is true");
} else if (a === b) {
  console.log("condition 2 is true");
} else if (a === d) {
  console.log("condition 3 is true");
} else {
  console.log("nothing is true");
}
