import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(ontimeupdate, 1000));

player.getVideoTitle().then(function (title) {
    console.log('title:', title)
});

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {player.setCurrentTime(currentTime)};

function ontimeupdate(evt) {
    localStorage.setItem("videoplayer-current-time", evt.seconds);
};
