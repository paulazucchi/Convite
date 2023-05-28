const playPauseCheck = document.getElementById("playpause-check")
let isPlaying = false;
let startedOnce = false;
let audio = new Audio("./som/01 Opening (part 1).mp3");
audio.volume = 0.02;
audio.addEventListener("ended", () => {
    nextMusic();
}, true);


playPauseCheck.addEventListener("click", () => {
    if (isPlaying) {
        isPlaying = false
        audio.pause()
    } else {
        isPlaying = true
        audio.play()
    }
})


function nextMusic() {

    audio = new Audio("./som/02 Opening (part 2).mp3");
    audio.volume = 0.02;
    audio.loop = true;
    audio.play();
}

document.addEventListener("click",  () => {
    if (!isPlaying && !startedOnce) {
        isPlaying = true;
        startedOnce = true;
        playPauseCheck.checked = true;
        audio.play();
    }
})

