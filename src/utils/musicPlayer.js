// musicPlayer.js
export function initializeMusicPlayer(audioSrc) {
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const durationElement = document.getElementById('duration');
  const musicLengthElement = document.getElementById('music-length');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const volumeSlider = document.getElementById('volume-slider'); // Menambahkan referensi ke elemen slider volume

  // volumeSlider.addEventListener('input', function () {
  //   audio.volume = volumeSlider.value / 100;
  // });

  audio.volume = 0.14

  playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  });

  audio.addEventListener('timeupdate', function () {
    const currentSeconds = Math.floor(audio.currentTime % 60);
    const currentMinutes = Math.floor(audio.currentTime / 60);
    const durationSeconds = Math.floor(audio.duration % 60);
    const durationMinutes = Math.floor(audio.duration / 60);

    const currentTimeString = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    const durationTimeString = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

    if (durationTimeString !== "NaN:NaN") {
      musicLengthElement.textContent = `${durationTimeString}`
    }

    durationElement.textContent = `${currentTimeString}`;
  });

  progressContainer.addEventListener('click', function (event) {
    const progressBarRect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;

    console.log(progressBarRect.left);
    const clickPercentage = (clickX / progressBarWidth) * 100;

    const newTime = (clickPercentage / 100) * audio.duration;

    // Ensure newTime is within valid range
    audio.currentTime = Math.min(Math.max(newTime, 0), audio.duration - 1);

    // Update progress bar animation
    anime({
      targets: progressBar,
      width: `${(audio.currentTime / audio.duration) * 100}%`,
      easing: 'linear',
      duration: 800
    });
  });

  audio.addEventListener('timeupdate', function () {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;

    anime({
      targets: progressBar,
      width: `${progressPercentage}%`,
      easing: 'linear',
      duration: 800
    });
  });

  // Setel sumber audio setelah semua event didaftarkan
  audio.src = audioSrc;
}
