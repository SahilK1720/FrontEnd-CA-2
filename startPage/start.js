function submit(){
    const username = document.getElementById("uname").value;
    const nickname = document.getElementById("nname").value;

    var userDetails = {
        username: username,
        nickname: nickname
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));    
};

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
