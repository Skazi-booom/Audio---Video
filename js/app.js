let boxMusic = document.querySelector(".box-music");

let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnSpeed = document.querySelector(".Speed");
let btnShowTime = document.querySelector(".Show-Time");
let tt = document.querySelector(".tt");
let showTimer = boxMusic.currentTime;
let counter = 0;
btnPlay.addEventListener("click", function () {
  boxMusic.play();
  console.log("Play ");
  durationHandler();
  ShowTimeHandler();
  setInterval(function () {
    tt.innerHTML = "Time: " + Math.floor(boxMusic.currentTime);
  });
});

btnPause.addEventListener("click", function () {
  boxMusic.pause();
  console.log("Pause ");
});

btnSpeed.addEventListener("click", function () {
  boxMusic.playbackRate = 2;
  console.log("Speed 2X");
});

btnShowTime.addEventListener("click", function () {
  ShowTimeHandler();
});

function durationHandler() {
  console.log(boxMusic.duration);
}

function ShowTimeHandler() {
  console.log("Show Time: " + Math.floor(boxMusic.currentTime));
}
