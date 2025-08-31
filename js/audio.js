window.onload = function () {
  var controlBtns = document.querySelectorAll(".btn-toggle");
  var audioElements = document.querySelectorAll(".audio");
  var currentSong = null;

  controlBtns.forEach(function (btn) {
    btn.addEventListener("click", togglePlay);
  });

  function togglePlay() {
    var songId = this.getAttribute("data-song");
    var song = document.querySelector("#" + songId);

    // Pause the current song if it's already playing
    if (currentSong !== null && currentSong !== song) {
      currentSong.pause();
    }

    // Pause the current song if it's the same as the clicked song
    if (song.paused) {
      song.play();
      currentSong = song;
    } else {
      song.pause();
      currentSong = null;
    }

    // Pause all other audio elements except the current one
    audioElements.forEach(function (audio) {
      if (audio !== song) {
        audio.pause();
      }
    });
  }

  window.stopAll = function () {
    var audioElements = document.querySelectorAll("audio.audio");
    var currentAudio = event.target;

    // Pause all other audio elements except the currently playing one
    audioElements.forEach(function (audio) {
      if (audio !== currentAudio) {
        audio.pause();
      }
    });
  };
};
