"use strict"

console.log("JS Kører");

window.addEventListener("load", initApp);

function initApp() {
    console.log("start")
    const blueSquare = document.querySelector("#blue_square");
    
    blueSquare.addEventListener("click", changeColor);
}

function changeColor() {
    console.log("Skift farve");
    this.classList.add("changeColor");
    // document.querySelector("#blue_square").classList.add("changeColor");
    this.addEventListener("click", removehangeColor);
}

function removehangeColor() {
    console.log("fjern farve");
this.classList.remove("changeColor");
document
  .querySelector("#blue_square")
  .addEventListener("click", pauseColorChange);    
}


function pauseColorChange() {
    console.log("Pause i farveskift");
    document.querySelector("#blue_square").addEventListener("click", changeColor);
}