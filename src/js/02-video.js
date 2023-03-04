import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, {
  duration: 61.857,
  percent: 0,
  seconds: 0
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(KEY_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_TIME));