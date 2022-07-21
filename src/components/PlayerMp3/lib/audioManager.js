import React from "react";
import PlayerContext from "";


const data = React.useContext(PlayerContext);
const btnPlayPause = document.querySelector(".playPause i");

const play = () => {
    audio.play();
}
const pause = () => {
    audio.pause();
}

const audioManager = () => {
    playPause.addEventListener("click", () => {
        if (audio.paused) {
            play();
            btnPlayPause.classList.toggle("fa-play-circle");
            btnPlayPause.classList.toggle("fa-pause-circle");
        } else {
            pause();
            btnPlayPause.classList.toggle("fa-pause-circle");
            btnPlayPause.classList.toggle("fa-play-circle");
        }

    })
    //
    next.addEventListener("click", () => {
        pause();
        console.log(currentTrack);
        let currentVolume = audio.volume;
        audio = new Audio(playlist[currentTrack].mp3);
        audio.volume = currentVolume;
        play();
        btnPlayPause.classList.remove("fa-play-circle");
        btnPlayPause.classList.add("fa-pause-circle");
    })

    prev.addEventListener("click", () => {
        pause();
        console.log(currentTrack);
        let currentVolume = audio.volume;
        audio = new Audio(playlist[currentTrack].mp3);
        audio.volume = currentVolume;
        play();
        btnPlayPause.classList.remove("fa-play-circle");
        btnPlayPause.classList.add("fa-pause-circle");
    })
    hammerSlider.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL
    })

    hammerSlider.on("swipeleft swiperight", function (ev) {

        if (ev.type === "swiperight") {
            pause();
            console.log(currentTrack);
            let currentVolume = audio.volume;
            audio = new Audio(playlist[currentTrack].mp3);
            audio.volume = currentVolume;
            play();
            btnPlayPause.classList.remove("fa-play-circle");
            btnPlayPause.classList.add("fa-pause-circle");
        }
        if (ev.type === "swipeleft") {
            pause();
            console.log(currentTrack);
            let currentVolume = audio.volume;
            audio = new Audio(playlist[currentTrack].mp3);
            audio.volume = currentVolume;
            play();
            btnPlayPause.classList.remove("fa-play-circle");
            btnPlayPause.classList.add("fa-pause-circle");
        }
    })


}

export {
    play,
    pause,
    audioManager
}