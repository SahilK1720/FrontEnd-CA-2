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



//Using arrays to store win phrases and using random number function to randomly display the phrase
const win = document.getElementById("compliment");

// Array of values
const randomValues = ["Incredible Win!", "Hurray!", "Cheers!🥂", "Congratulations!", "Hear-Hear!"];

// Function to get a random value from the array
function getRandomValue(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Get a random value and display it
const randomOutput = getRandomValue(randomValues);
win.innerHTML = randomOutput;

