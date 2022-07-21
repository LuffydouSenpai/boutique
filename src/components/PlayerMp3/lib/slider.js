const sliderTransition = (currentTrack) => {
    sliderImgNext.src = playlist[currentTrack].cover;
    sliderImgOriginal.style.opacity = 0;

    setTimeout(() => {
        sliderImgOriginal.src = playlist[currentTrack].cover;
        sliderImgOriginal.style.opacity = 1;
    }, 200)
}

const slider = () => {
    const sliderImgOriginal = document.createElement("img");
    globalThis.sliderImgOriginal = sliderImgOriginal;
    const sliderDiv = document.querySelector(".slider")
    sliderDiv.append(sliderImgOriginal);
    sliderDiv.style.position = "relative";
    sliderImgOriginal.style.position = "absolute";
    sliderImgOriginal.style.top = 0;
    sliderImgOriginal.style.left = 0;
    sliderImgOriginal.style.transition = "all .2s";
    sliderImgOriginal.src = playlist[currentTrack].cover;
    const sliderImgNext = document.createElement("img");
    globalThis.sliderImgNext = sliderImgNext;
    sliderImgNext.src = playlist[currentTrack].cover;
    sliderDiv.prepend(sliderImgNext);

    next.addEventListener(
        "click",
        function () {
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);
            } else {
                currentTrack++;
                sliderTransition(currentTrack);
            }
        }
    )

    prev.addEventListener(
        "click",
        function () {
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);

            } else {
                currentTrack--;
                sliderTransition(currentTrack);
            }
        }
    )
    hammerSlider.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL
    })
    hammerSlider.on("swipeleft swiperight", function (ev) {

        if (ev.type === "swiperight") {
            if (currentTrack === 0) {
                currentTrack = playlist.length - 1;
                sliderTransition(currentTrack);
            } else {
                currentTrack--;
                sliderTransition(currentTrack);
            }
        }
        if (ev.type === "swipeleft") {
            if (currentTrack === playlist.length - 1) {
                currentTrack = 0;
                sliderTransition(currentTrack);
            } else {
                currentTrack++;
                sliderTransition(currentTrack);
            }
        }
    })
}
export {
    slider
};