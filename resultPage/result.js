const winDetails = JSON.parse(localStorage.getItem("winDetails"));

var moves = winDetails.moves;
var handsWon = winDetails.handsWon;
var handsPlayed = winDetails.handsPlayed;

const text = document.getElementById("hands-won")
const text2 = document.getElementById("numberMoves");

text.innerHTML = `${handsWon} '/' ${handsPlayed}`;
text2.innerHTML = moves; 


const playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", function(){
    location.href = "../index.html";
})
