const elementOne = document.getElementById("first");
elementOne.addEventListener("mouseenter", () => {
  //   elementOne.style.backgroundColor = "red";
  //   window.location = "https://www.google.com/";
  //   window.location.reload();
  //   window.close();
});

elementOne.addEventListener("mouseleave", () => {
  elementOne.style.backgroundColor = "";
});

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  elementOne.innerText = "Bye";
});
