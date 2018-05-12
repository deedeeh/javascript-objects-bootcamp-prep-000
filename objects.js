const playlist = {
  artist: "Adele",
  song: "Skyfall"
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}