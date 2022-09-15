// var myVariable --> SOHA NE HASZNÁLJ VAR-t!!!
let myVariable = "value";
// console.log(myVariable);

myVariable = "new value";
// console.log(myVariable);

myVariable = 2;
// console.log(myVariable);

myVariable = true;
// console.log(myVariable);

let myVariable2 = "szöveg";
// console.log(myVariable2);

myVariable = myVariable2;
// console.log(myVariable);

let myVariable3 = myVariable + myVariable2;
// console.log(myVariable3);

// Függvény

function sumVariables(variable1, variable2) {
  console.log(variable1 + variable2);
}
sumVariables(myVariable, myVariable2);
sumVariables(8, "papa");
sumVariables("word1", "word2");

function loadEvent() {
  console.log("loaded");
  let rootElement = document.getElementById("root");
  rootElement.insertAdjacentHTML("beforeend", "Hello World");
}

window.addEventListener("load", loadEvent); 
// load lehet click is. akkor kattintásra jelenik meg.
