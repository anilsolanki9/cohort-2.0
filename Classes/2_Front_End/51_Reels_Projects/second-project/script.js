let reelsContainer = document.querySelector('.reels-container');
const reelsData = [
  {
    reelUrl: './reels/video1.mp4',
    isFollowed: false,
    profileImage: 'https://randomuser.me/api/portraits/men/11.jpg',
    username: 'arjun_dev',
    caption: 'Late night coding hits different!',
    isLiked: false,
    likeCount: 124,
    commentCount: 18,
  },
  {
    reelUrl: './reels/video2.mp4',
    isFollowed: true,
    profileImage: 'https://randomuser.me/api/portraits/women/21.jpg',
    username: 'megha.codes',
    caption: 'Trying out new UI animations 💫',
    isLiked: true,
    likeCount: 980,
    commentCount: 42,
  },
  {
    reelUrl: './reels/video3.mp4',
    isFollowed: false,
    profileImage: 'https://randomuser.me/api/portraits/men/31.jpg',
    username: 'rahul_design',
    caption: 'Minimalism > everything else.',
    isLiked: false,
    likeCount: 312,
    commentCount: 10,
  },
  {
    reelUrl: './reels/video4.mp4',
    isFollowed: true,
    profileImage: 'https://randomuser.me/api/portraits/women/41.jpg',
    username: 'kriti_ui',
    caption: 'New project sneak peek 😉',
    isLiked: false,
    likeCount: 450,
    commentCount: 27,
  },
  {
    reelUrl: './reels/video5.mp4',
    isFollowed: false,
    profileImage: 'https://randomuser.me/api/portraits/men/51.jpg',
    username: 'deepak_fullstack',
    caption: 'Backend + frontend = chaos 😂',
    isLiked: false,
    likeCount: 220,
    commentCount: 15,
  },
  {
    reelUrl: './reels/video6.mp4',
    isFollowed: true,
    profileImage: 'https://randomuser.me/api/portraits/women/61.jpg',
    username: 'priya_javascript',
    caption: 'JS tips you should know!',
    isLiked: true,
    likeCount: 1500,
    commentCount: 89,
  },
  {
    reelUrl: './reels/video7.mp4',
    isFollowed: false,
    profileImage: 'https://randomuser.me/api/portraits/men/71.jpg',
    username: 'vishal_dev',
    caption: 'Debugging be like… 🤦‍♂️',
    isLiked: false,
    likeCount: 189,
    commentCount: 7,
  },
  {
    reelUrl: './reels/video8.mp4',
    isFollowed: true,
    profileImage: 'https://randomuser.me/api/portraits/women/81.jpg',
    username: 'ananya.art',
    caption: 'Working on a new illustration 🎨',
    isLiked: false,
    likeCount: 800,
    commentCount: 55,
  },
  {
    reelUrl: './reels/video9.mp4',
    isFollowed: false,
    profileImage: 'https://randomuser.me/api/portraits/men/91.jpg',
    username: 'sahil_editor',
    caption: 'Smooth transitions 🔥',
    isLiked: true,
    likeCount: 1450,
    commentCount: 60,
  },
  {
    reelUrl: './reels/video10.mp4',
    isFollowed: true,
    profileImage: 'https://randomuser.me/api/portraits/women/12.jpg',
    username: 'tanya.vibes',
    caption: 'Weekend mood 😌',
    isLiked: false,
    likeCount: 300,
    commentCount: 12,
  },
];

let isMuted = true;

function addData() {
  let clutter = '';

  reelsData.forEach(function (reel, idx) {
    clutter += `<div class="reel">
            <div class="sound">
              <i class="ri-volume-up-fill"></i>
            </div>
            <div class="play">
              <i class="ri-play-fill"></i>
            </div>
            <video autoplay ${isMuted ? `muted` : ``} loop src="${reel.reelUrl}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${reel.profileImage}"
                  alt=""
                />
                <h1>${reel.username}</h1>
                <button class="follow" id="${idx}" >${reel.isFollowed ? 'Unfollow' : 'Follow'}</button>
              </div>
              <p class="caption">${reel.caption}</p>

              <div class="right">
                <div id="${idx}" class="like">
                  <h4 class="like-icon">${
                    reel.isLiked ? `<i class="ri-heart-3-fill liked"></i>` : `<i class="ri-heart-3-line"></i>`
                  }</h4>
                  <h6 class="like-count">${reel.likeCount}</h6>
                </div>
                <div class="comment">
                  <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                  <h6 class="comment-count">${reel.commentCount}</h6>
                </div>
                <div class="remix">
                  <h4 class="remix-icon"><i class="ri-recycle-line"></i></h4>
                </div>
                <div class="share">
                  <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
                </div>
                <div class="menu">
                  <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                </div>
              </div>
            </div>
          </div>`;
  });

  reelsContainer.innerHTML = clutter;
}

addData();

reelsContainer.addEventListener('click', function (dets) {
  if (dets.target.classList.contains('like')) {
    if (reelsData[dets.target.id].isLiked === false) {
      reelsData[dets.target.id].isLiked = true;
      reelsData[dets.target.id].likeCount++;
    } else {
      reelsData[dets.target.id].isLiked = false;
      reelsData[dets.target.id].likeCount--;
    }
    addData();
  } else if (dets.target.classList.contains('follow')) {
    if (reelsData[dets.target.id].isFollowed === true) {
      reelsData[dets.target.id].isFollowed = false;
    } else {
      reelsData[dets.target.id].isFollowed = true;
    }
    addData();
  } else if (dets.target.classList.contains('sound')) {
    isMuted ? (isMuted = false) : (isMuted = true);
    addData();
  }
});

let videos = document.querySelectorAll('.reel video');

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  },
  {
    threshold: 0.6,
  }
);

videos.forEach(function (video) {
  observer.observe(video);
});
