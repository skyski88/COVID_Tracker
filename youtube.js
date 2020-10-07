var start = document.createElement('script');

start.src = "https://www.youtube.com/iframe_api";
var selectItem = document.getElementsByTagName('script')[0];
selectItem.parentNode.insertBefore(start, selectItem);

  var player;
  var player2;
  var player3;
  var player4;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer1', {
      height: '300',
      width: '500',
      videoId: 'xVu_I6WCsto'
    });
    player2 = new YT.Player('ytplayer2', {
      height: '300',
      width: '500',
      videoId: '8dlUqlMDkR4'
    });
    player3 = new YT.Player('ytplayer3', {
      height: '300',
      width: '500',
      videoId: 'Zn6ih6mWn1o'
    });
    player4 = new YT.Player('ytplayer4', {
      height: '300',
      width: '500',
      videoId: 'oF1U1hrHxVI'
    });
  }

function startPlayer(event) {
  event.target.playVideo();
}

var finished = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !finished) {
    setTimeout(stopVideo, 229000);
    finished = true;
  }
}
function stopVideo() {
  iframe.stopVideo();
}











