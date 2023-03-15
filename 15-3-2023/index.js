//DOM - Document Object Model

//document.getElementById
let elById = document.getElementById("first");
console.log("This elemetn we got by ID:", elById);

//document.getElementsByClassName
let elByClassName = document.getElementsByClassName("first");
console.log("This element we got by Class:", elByClassName);

// document.getElementsByName
let elByName = document.getElementsByName("first");
console.log("This element we got by Name:", elByName);

// document.getElementsByTagName
let elByTagName = document.getElementsByTagName("div");
console.log("This elements we got by Tag Name:", elByTagName);

//document.querySelector or document.querySelectorAll
let elByQuery = document.querySelector("#first div");
console.log("This element we got by query:", elByQuery);
