import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const playpauseButton = document.querySelector("#play-pause");
const muteunmuteButton = document.querySelector("#mute-unmute");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

playpauseButton.onclick = () => player.togglePlay();
muteunmuteButton.onclick = () => player.toggleMute();
