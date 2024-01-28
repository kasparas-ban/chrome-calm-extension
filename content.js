const hidePlaybackSpeedOptions = () => {
  const speedOptionsLabel = document.querySelectorAll('.ytp-menuitem-label')

  if (speedOptionsLabel) {
    speedOptionsLabel.forEach(optionElement => {
      if (optionElement.textContent.includes('Playback speed')) {
        optionElement.parentElement.style.display = 'none'
      }
    })
  }
};

const setPlaybackSpeed = (videoPlayer, speed) => {
  if (videoPlayer) videoPlayer.playbackRate = speed
};

let isVolumeListenerSet = false

const setVolume = (videoPlayer, volume) => {
  const volumeChangeHandler = () => {
    if (videoPlayer.volume > volume) videoPlayer.volume = volume
  };

  if (videoPlayer && !isVolumeListenerSet) {
    videoPlayer.addEventListener('volumechange', volumeChangeHandler);
    isVolumeListenerSet = true
  }
};

const run = () => {
  const videoPlayer = document.querySelector('.html5-main-video');

  hidePlaybackSpeedOptions()
  setPlaybackSpeed(videoPlayer, 1)
  // setVolume(videoPlayer, 0.1)
}

setInterval(run, 3000);