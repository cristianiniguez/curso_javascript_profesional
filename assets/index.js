import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const playpauseButton = document.querySelector("#play-pause");
const muteunmuteButton = document.querySelector("#mute-unmute");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

playpauseButton.onclick = () => player.togglePlay();
muteunmuteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}