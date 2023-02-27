var body = document.getElementById("#gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h4= document.querySelector("h4");
var random = document.querySelector("button");

function setGradient(){
    body.style.background="Linear-gradient(tto right, " + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient)
random.addEventListener("click",generateRandomColor)