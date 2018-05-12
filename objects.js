const playlist = {
  Adele: "Skyfall",
  Rihanna: "Diamonds"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

