const infoMusique = (currentTrack) => {

    const titre = playlist[currentTrack].title;
    const description = playlist[currentTrack].description;
    const artiste = playlist[currentTrack].artist;
    const genre = playlist[currentTrack].genre;
    const annee = playlist[currentTrack].annee;

    numMusique.innerHTML = "PLAYING " + (currentTrack + 1) + " OF " + playlist.length;
    infoTitre.innerHTML = titre;
    infoDescription.innerHTML = description;

    information.innerHTML = "Artiste : " + artiste + "  |  Genre : " + genre + "  |  Année : " + annee
}


const infoManager = () => {
    infoMusique(currentTrack);

    next.addEventListener("click", () => {
        infoMusique(currentTrack);
    })

    prev.addEventListener("click", () => {
        infoMusique(currentTrack);
    })


    hammerSlider.get('swipe').set({
        direction: Hammer.DIRECTION_HORIZONTAL
    })

    hammerSlider.on("swipeleft swiperight", function (ev) {

        if (ev.type === "swiperight") {
            infoMusique(currentTrack);
        }
        if (ev.type === "swipeleft") {
            infoMusique(currentTrack);
        }
    })

}



export {
    infoManager
}