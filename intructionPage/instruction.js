document.getElementById("proceed-button").addEventListener("click", function(e) {
    location.href = "../gamePage/game.html";
} );

document.getElementById("back").addEventListener("click", function(e) {
    location.href = "../index.html";
} );

const backgroundSound = new Audio("../assets/audio/solitaire.mp3");
window.onload = function(){
	backgroundSound.pause();
	backgroundSound.currentTime = 0;
	backgroundSound.loop = true;
	backgroundSound.play();
}

const audio = document.getElementById("audio-button");

let sound = localStorage.getItem("sound")
console.log(sound)

audio.onclick = function(){
    if(sound)
    {
        audio.src = "../assets/images/volume-down.png"
        localStorage.setItem("sound",false)
        sound = false
        backgroundSound.pause()
    }
    else{
        audio.src = "../assets/images/volume-up.png"
        localStorage.setItem("sound",true)
        sound = true
        backgroundSound.currentTime = 0
        backgroundSound.play()
    }}
