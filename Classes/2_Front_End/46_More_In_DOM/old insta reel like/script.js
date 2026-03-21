let videoContainer = document.querySelector('.video-container');
let container = document.querySelector('.container');

let likesCount = document.querySelector('.right p');
likesCount.textContent = '0';
let likesCounter = 0;

let followBtn = document.querySelector('.follow-btn');
let likeBtn = document.querySelector('.line-heart');
let dislikeBtn = document.querySelector('.filled-heart');

//video play pause algo
let overlay = document.querySelector('#overlay');
let audibleIcon = document.querySelector('i.audible');
let mutedIcon = document.querySelector('i.muted');
let playBtn = document.querySelector('i.play');
let video = document.querySelector('video');
let midIconsContainer = document.querySelector('.mid');
let isPlaying = false;

let centralArea = document.querySelector('.centralArea');

let heart = document.querySelector('.centralArea i');

let lastClick = 0;
let singleClickTimer;

overlay.addEventListener('click', function (eve) {
  const now = Date.now();
  const delta = now - lastClick;

  clearTimeout(singleClickTimer);

  if (delta < 250) {
    // DOUBLE CLICK
    console.log('DOUBLE CLICK');
    lastClick = 0; // reset
    // yaha double click wala code likho

    heart.classList.add('animate');
    setTimeout(function () {
      heart.classList.remove('animate');
    }, 900);
    return;
  }

  // SINGLE CLICK (wait to confirm no double click)
  singleClickTimer = setTimeout(() => {
    console.log('SINGLE CLICK');

    if (isPlaying) {
      midIconsContainer.style.display = 'flex';
      video.pause();
      isPlaying = false;
      overlay.style.opacity = 1;
    } else {
      midIconsContainer.style.display = 'none';
      video.play();
      isPlaying = true;
      overlay.style.opacity = 0;
    }
  }, 250);

  lastClick = now;
});

audibleIcon.addEventListener('click', () => {
  audibleIcon.style.display = 'none';
  mutedIcon.style.display = 'flex';
  video.muted = true;
  midIconsContainer.style.display = 'none';
});

mutedIcon.addEventListener('click', () => {
  mutedIcon.style.display = 'none';
  audibleIcon.style.display = 'flex';
  video.muted = false;
  midIconsContainer.style.display = 'none';
});

followBtn.addEventListener('click', function () {
  if (followBtn.textContent === 'Following') {
    followBtn.textContent = 'Follow';
  } else {
    followBtn.textContent = 'Following';
  }
  followBtn.classList.toggle('follow');
});

likeBtn.addEventListener('click', function () {
  likeBtn.style.display = 'none';
  dislikeBtn.style.display = 'block';
  likesCounter++;
  likesCount.textContent = `${likesCounter}`;
});

dislikeBtn.addEventListener('click', function () {
  dislikeBtn.style.display = 'none';
  likeBtn.style.display = 'block';
  likesCounter--;
  likesCount.textContent = `${likesCounter}`;
});

//main animaion of heart
