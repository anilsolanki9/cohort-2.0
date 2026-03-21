let songSearchInput = document.querySelector("#songsearch");

let playerArtistProfileImg = document.querySelector("#player-artist-profile");
let playerArtistName = document.querySelector("#player-artist-name");
let playerArtistHandle = document.querySelector("#player-artist-handle");

let heartBtn = document.querySelector("#heartBtn");

let playerBgImg = document.querySelector("#player-bg-img");

let songTitle = document.querySelector(".song-title");
let songArtist = document.querySelector(".song-artist");
let currentTime = document.querySelector("#currentTime");
let remainTime = document.querySelector("#remainTime");
let progressFill = document.querySelector("#progressFill");

let prevSongBtn = document.querySelector(".back-btn");
let playSongBtn = document.querySelector(".play-btn");
let nextSongBtn = document.querySelector(".next-btn");

let playlistTabsElem = document.querySelector(".playlist-tabs");
let plalists = {
  "All songs": [],
  Favourites: [],
  Best: [],
  Chill: [],
};

let songs = [
  {
    artistProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    artistName: "Arijit Singh",
    artistHandle: "@arijitsingh",
    isLiked: false,
    songName: "Kesariya",
    songBannerImg: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/women/44.jpg",
    artistName: "Shreya Ghoshal",
    artistHandle: "@shreyaghoshal",
    isLiked: false,
    songName: "Ve Kamleya",
    songBannerImg: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/45.jpg",
    artistName: "Diljit Dosanjh",
    artistHandle: "@diljitdosanjh",
    isLiked: false,
    songName: "Lover",
    songBannerImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/21.jpg",
    artistName: "Badshah",
    artistHandle: "@badshah",
    isLiked: false,
    songName: "Jugnu",
    songBannerImg: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/52.jpg",
    artistName: "AP Dhillon",
    artistHandle: "@apdhillon",
    isLiked: false,
    songName: "Excuses",
    songBannerImg: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/65.jpg",
    artistName: "Armaan Malik",
    artistHandle: "@armaanmalik",
    isLiked: false,
    songName: "Butta Bomma (Hindi Cover)",
    songBannerImg: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/77.jpg",
    artistName: "King",
    artistHandle: "@ifeelking",
    isLiked: false,
    songName: "Maan Meri Jaan",
    songBannerImg: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/women/33.jpg",
    artistName: "Neha Kakkar",
    artistHandle: "@nehakakkar",
    isLiked: false,
    songName: "Dil Ko Karaar Aaya",
    songBannerImg: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/12.jpg",
    artistName: "Jubin Nautiyal",
    artistHandle: "@jubinnautiyal",
    isLiked: false,
    songName: "Raataan Lambiyan",
    songBannerImg: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/88.jpg",
    artistName: "Ritviz",
    artistHandle: "@ritviz",
    isLiked: false,
    songName: "Liggi",
    songBannerImg: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/41.jpg",
    artistName: "Prateek Kuhad",
    artistHandle: "@prateekkuhad",
    isLiked: false,
    songName: "Kasoor",
    songBannerImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/73.jpg",
    artistName: "Darshan Raval",
    artistHandle: "@darshanraval",
    isLiked: false,
    songName: "Ek Tarfa",
    songBannerImg: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    artistName: "Sidhu Moose Wala",
    artistHandle: "@sidhumoosewala",
    isLiked: false,
    songName: "295",
    songBannerImg: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/15.jpg",
    artistName: "Yo Yo Honey Singh",
    artistHandle: "@yoyohoneysingh",
    isLiked: false,
    songName: "Brown Rang",
    songBannerImg: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/92.jpg",
    artistName: "Shubh",
    artistHandle: "@shubhworldwide",
    isLiked: false,
    songName: "No Love",
    songBannerImg: "https://images.unsplash.com/photo-1518972734183-c5f3e7b22b4e?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/61.jpg",
    artistName: "Karan Aujla",
    artistHandle: "@karanaujla",
    isLiked: false,
    songName: "Softly",
    songBannerImg: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/women/66.jpg",
    artistName: "Asees Kaur",
    artistHandle: "@aseeskaur",
    isLiked: false,
    songName: "Raatan Lambiyan (Female Version)",
    songBannerImg: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/36.jpg",
    artistName: "Anuv Jain",
    artistHandle: "@anuvjain",
    isLiked: false,
    songName: "Baarishein",
    songBannerImg: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/28.jpg",
    artistName: "Stebin Ben",
    artistHandle: "@stebinben",
    isLiked: false,
    songName: "Tu Mile Dil Khile (Remake)",
    songBannerImg: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop",
  },
  {
    artistProfile: "https://randomuser.me/api/portraits/men/19.jpg",
    artistName: "Raghav Chaitanya",
    artistHandle: "@raghavchaitanya",
    isLiked: false,
    songName: "Hua Main",
    songBannerImg: "https://images.unsplash.com/photo-1746990381809-65f75d2a32e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
  },
];

let songsList = document.querySelector("#songsList");

function renderSongs() {
  songsList.innerHTML = songs
    .map((song, idx) => {
      return `<div data-index=${idx} class="song-row">
              <div class="song-thumb">
                <img src=${song.songBannerImg} alt="" />
              </div>
              <div class="song-info">
                <div class="song-name">${song.songName}</div>
                <div class="song-by">${song.artistName}</div>
              </div>
              <button class="play-row-btn">▶</button>
            </div>`;
    })
    .join("");
}

// add playing class on play

renderSongs();

let state = {
  currentSongIndex: 0,
  isPlaying: false,
  progress: 0, // 0-100
  activePlaylist: "All songs",
  songs: songs, // your full array
  filteredSongs: [], // what's currently shown
};

songsList.addEventListener("click", (e) => {
  let row = e.target.closest(".song-row");
  if (!row) return;
  let index = row.dataset.index; // store index in each row's data-index
  selectSong(index);
});

function selectSong(index) {
  state.currentSongIndex = index;
  
}
