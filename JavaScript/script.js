const audio = document.getElementById("audioPlayer");
const playlistItems = document.querySelectorAll("#playlist li");
let currentTrack = 0;

function playTrack(index) {
  const src = playlistItems[index].getAttribute("data-src");
  audio.src = src;
  audio.play();
  playlistItems.forEach((item) => item.classList.remove("active"));
  playlistItems[index].classList.add("active");
}

audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlistItems.length;
  playTrack(currentTrack);
});

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentTrack = index;
    playTrack(currentTrack);
  });
});

playTrack(currentTrack);
