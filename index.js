// Expanded array of song objects with additional songs
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  { title: "Thunderstruck", artist: "AC/DC", genre: "Rock" },
  { title: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
  { title: "Superstition", artist: "Stevie Wonder", genre: "R&B" },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
  { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop" },
  { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
  { title: "Hotel California", artist: "Eagles", genre: "Rock" },
  { title: "What's Going On", artist: "Marvin Gaye", genre: "R&B" },
  { title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
];

// Complete the guardians object by assigning each Guardian their preferred music genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  Drax: "Rock",
  Rocket: "R&B",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  const playlists = {};

  // Use map() function to create playlists for each Guardian
  Object.keys(guardians).map((guardian) => {
    const preferredGenre = guardians[guardian];
    const playlist = songs.filter((song) => song.genre === preferredGenre);
    playlists[guardian] = playlist;
  });

  return playlists;
}

// Function to display playlists on the webpage
function displayPlaylists(playlists) {
  const playlistsContainer = document.getElementById("playlists");
  Object.keys(playlists).forEach((guardian) => {
    const playlistDiv = document.createElement("div");
    playlistDiv.className = "playlist";
    const guardianName = document.createElement("h2");
    guardianName.innerText = `${guardian}'s Playlist`;
    playlistDiv.appendChild(guardianName);
    playlists[guardian].forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.className = "song";
      const songTitle = document.createElement("span");
      songTitle.className = "song-title";
      songTitle.innerText = `${song.title} by ${song.artist}`;
      songDiv.appendChild(songTitle);
      playlistDiv.appendChild(songDiv);
    });
    playlistsContainer.appendChild(playlistDiv);
  });
}

// Generate and display the playlists for each Guardian
const guardianPlaylists = generatePlaylist(guardians, songs);
displayPlaylists(guardianPlaylists);
