const player = document.querySelector(".player");
const toggle = document.querySelector(".toggle");
const video = document.querySelector(".viewer");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const progressBar = player.querySelector(".progress__filled");

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRngeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRngeUpdate)
);

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime = parseFloat(this.dataset.skip);
}

function handleRngeUpdate() {
  video[this.name] = this.value;
}

video.addEventListener("timeupdate", handleProgress);
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
