let allReelsContainer = document.querySelector(".all-reels");

const posts = [
  {
    userProfileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    userName: "arjun.mehta",
    isFollowed: false,
    isPostLiked: false,
    postCaption: "Late night coding session. Shipping features feels good.",
    likesCount: 128,
    commentsCount: 14,
    sharesCount: 3,
    vidUrl: "./videos-assets/vid1.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/women/21.jpg",
    userName: "sara_khan21",
    isFollowed: true,
    isPostLiked: true,
    postCaption: "Morning coffee and a bit of UI designing.",
    likesCount: 342,
    commentsCount: 29,
    sharesCount: 7,
    vidUrl: "./videos-assets/vid2.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/men/32.jpg",
    userName: "rohan.verma",
    isFollowed: false,
    isPostLiked: true,
    postCaption: "Exploring animation effects in CSS today.",
    likesCount: 215,
    commentsCount: 18,
    sharesCount: 5,
    vidUrl: "./videos-assets/vid3.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/women/44.jpg",
    userName: "neha_sharma",
    isFollowed: false,
    isPostLiked: false,
    postCaption: "Design systems make life easier.",
    likesCount: 96,
    commentsCount: 11,
    sharesCount: 2,
    vidUrl: "./videos-assets/vid4.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/men/52.jpg",
    userName: "kabir52",
    isFollowed: true,
    isPostLiked: false,
    postCaption: "Testing scroll based interactions.",
    likesCount: 401,
    commentsCount: 36,
    sharesCount: 10,
    vidUrl: "./videos-assets/vid5.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/women/63.jpg",
    userName: "ananya.p",
    isFollowed: false,
    isPostLiked: true,
    postCaption: "Minimal UI always wins.",
    likesCount: 178,
    commentsCount: 16,
    sharesCount: 4,
    vidUrl: "./videos-assets/vid6.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/men/71.jpg",
    userName: "dev_malhotra",
    isFollowed: true,
    isPostLiked: true,
    postCaption: "Working on performance optimization.",
    likesCount: 520,
    commentsCount: 48,
    sharesCount: 15,
    vidUrl: "./videos-assets/vid7.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/women/12.jpg",
    userName: "priya_iyer",
    isFollowed: false,
    isPostLiked: false,
    postCaption: "Clean layouts > complex layouts.",
    likesCount: 132,
    commentsCount: 9,
    sharesCount: 1,
    vidUrl: "./videos-assets/vid8.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/men/85.jpg",
    userName: "aditya.rao",
    isFollowed: true,
    isPostLiked: false,
    postCaption: "Trying some smooth hover effects.",
    likesCount: 287,
    commentsCount: 21,
    sharesCount: 6,
    vidUrl: "./videos-assets/vid9.mp4",
  },
  {
    userProfileImg: "https://randomuser.me/api/portraits/women/35.jpg",
    userName: "meera35",
    isFollowed: false,
    isPostLiked: true,
    postCaption: "Frontend experiments for today.",
    likesCount: 199,
    commentsCount: 13,
    sharesCount: 3,
    vidUrl: "./videos-assets/vid10.mp4",
  },
];

// Goal => Load posts
// State => Kuch nahi se posts load
// events => Website loadhone pe, like krne pe, follow krne pe vgrh
// logic => posts pe forEach
// UI => allReels ke html me pt ho jaega.

function loadReels() {
  let clutter = "";

  posts.forEach((post, idx) => {
    clutter += `<div data-index="${idx}" class="reel">
            <video loop autoplay muted src="${post.vidUrl}"></video>
            <div class="bottom">
              <div class="details">
                <img
                  class="user-profile"
                  src="${post.userProfileImg}"
                  alt=""
                />
                <h2>${post.userName}</h2>
                <button class="followBtn ${post.isFollowed ? "following" : ""}">${post.isFollowed ? "Following" : "Follow"}</button>
              </div>
              <div class="caption">
                ${post.postCaption}
              </div>
              <div class="interactions">
                <div class="like">
                ${post.isPostLiked ? `<i class="ri-heart-3-fill like-icon"></i>` : `<i class="ri-heart-3-line like-icon"></i>`}                  
                  <p class="like-count">${post.likesCount}</p>
                </div>
                <div class="comment">
                  <i class="ri-chat-3-line comment-icon"></i>
                  <p class="comment-count">${post.commentsCount}</p>
                </div>
                <div class="share">
                  <i class="ri-send-ins-line share-icon"></i>
                  <p class="share-icon">${post.sharesCount}</p>
                </div>
                <div class="menu">
                  <i class="ri-more-2-line menu-icon"></i>
                </div>
              </div>
            </div>
          </div>`;
  });

  allReelsContainer.innerHTML = clutter;
}

loadReels();

// Follow btn pe dbane se follow ho jaye
// event follow btn pe click
// logic => click hone pe object ki property update
// UI => Update ke bad text change ho jaega, anc ocollor bhi.

function handleInteraction() {
  allReelsContainer.addEventListener("click", (dets) => {
    let reel = dets.target.closest(".reel");
    // reel.dataset.index
    if (dets.target.classList.contains("followBtn")) {
      posts[reel.dataset.index].isFollowed = !posts[reel.dataset.index].isFollowed;
    } else if (dets.target.classList.contains("like-icon") || dets.target.classList.contains("like")) {
      posts[reel.dataset.index].isPostLiked = !posts[reel.dataset.index].isPostLiked;
    }
    loadReels();
  });
}

handleInteraction();

const reels = document.querySelectorAll(".reel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const reel = entry.target;
      const video = reel.querySelector("video");

      if (!video) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
        // 🔊 Play this one
        video.currentTime = 0;
        video.muted = false;

        // Pause all others first (hard guarantee only one plays)
        document.querySelectorAll(".reel video").forEach((v) => {
          if (v !== video) {
            v.pause();
            v.muted = true;
            v.currentTime = 0;
          }
        });

        video.play().catch(() => {}); // autoplay safety
      } else {
        // ⛔ Stop + reset
        video.pause();
        video.muted = true;
        video.currentTime = 0;
      }
    });
  },
  {
    root: document.querySelector(".all-reels"),
    threshold: [0.7], // only trigger when 70% visible
  },
);

reels.forEach((reel) => observer.observe(reel));

// document.body.addEventListener(
//   "click",
//   () => {
//     document.querySelectorAll("video").forEach((v) => {
//       v.muted = false;
//     });
//   },
//   { once: true },
// );
