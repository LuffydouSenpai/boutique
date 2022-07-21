const volumeManager = () => {


    volumeSlider.addEventListener("change", () => {
        setInterval(()=>{
           console.log(volumeSlider.value); 
    
        },1000)


        audio.volume = volumeSlider.value / 100;

    })



    /*     audio.volume= 0.5;
        volumeDown.addEventListener("click",()=>{
            //audio.volume = audio.volume - 0.05;
            audio.volume -= 0.05;
        })

        volumeUp.addEventListener("click",()=>{
            //audio.volume = audio.volume + 0.05;
            audio.volume += 0.05;
        }) */
}

export {
    volumeManager
};