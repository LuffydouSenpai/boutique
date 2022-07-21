import React from 'react';
import {playlist} from "./lib/playlist.js";
import {slider} from "./lib/slider.js";
import {play,pause,audioManager} from "./lib/audioManager.js";
import {volumeManager} from "./lib/volumeManager.js";
import {timeManager} from "./lib/timeManager.js"
import {infoManager} from "./lib/infoManager.js"

import './PlayerMp3.css';



class PlayerMp3 extends React.Component{
    constructor(props){
        super(props)
        //slider
        this.slider = slider;
        //audio
        this.audioManager = audioManager;
        //volume
        this.volumeManager = volumeManager;
        //temps
        this.timeManager = timeManager;
        // info diver
        this.infoManager = infoManager;
        this.state = {
            currentTime:0,
            next:document.querySelector(".next"),
            prev:document.querySelector(".prev"),
            playPause:document.querySelector(".playPause"),
            volumeSlider:document.querySelector(".volume_slider"),
            currentTime:document.querySelector(".current-time"),
            totalDuration:document.querySelector(".total-duration"),
            numMusique:document.querySelector(".numMusique"),
            infoTitre:document.querySelector(".title"),
            infoDescription:document.querySelector(".description"),
            information:document.querySelector(".info"),
            sliderDiv:document.querySelector(".slider"),
            playlist:playlist,
            audio:new Audio(this.playlist[this.currentTrack].mp3),
            sliderDiv:null,
            hammerSlider:null,
            audio:null
        }
/*         globalThis.sliderDiv = sliderDiv;
        globalThis.hammerSlider = hammerSlider;

        //objet audio
        globalThis.audio = audio; */
    }
    render(){
        return(
            <PlayerContext.Provider value={this.state}>
            <div className='playerSide'>
                <div className="player">
                    <div className="numMusique">PLAYING x OF y</div>
                    <div className="slider"></div>
                    <div className="title">Track Name</div>
                    <div className="description">Description</div>
                    <div className="nav">
                        <div className="prev">
                            <i className="fa fa-step-backward fa-2x"></i>
                        </div>
                        <div className="playPause">
                            <i className="fa fa-play-circle fa-5x"></i>
                        </div>
                        <div className="next">
                            <i className="fa fa-step-forward fa-2x"></i>
                        </div>
                    </div>
                    <div className="time">
                        <div className="current-time">00:00</div>
                        <input type="range" min="1" max="100" value="0" className="seek_slider"/>
                        <div className="total-duration">00:00</div>
                    </div>
                    <div className="info">Artiste : NomArtiste / Genre : GenreMusique / Année : AnneeMusique</div>
                    <div className="navVolume">
                        <i className="fa fa-volume-down"></i>
                        <input type="range" min="1" max="100" value="99" className="volume_slider"/>
                        <i className="fa fa-volume-up"></i>
                    </div>
                </div>
            </div>
            </PlayerContext.Provider>
        )
    }
}

export default PlayerMp3



