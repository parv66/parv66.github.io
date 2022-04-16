/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

$( document ).ready(function() {
   	$("body").prepend("<div id='jukebox' class='jukehide'><div id='player'><div id='player-track' class='active'><div id='album-name'>Otherside</div><div id='track-name'>Lena Raine</div><div id='track-time' class='active'><div id='current-time'>00:00</div><div id='track-length'>03:09</div></div><div id='s-area'><div id='ins-time' style='left: 0px; margin-left: 0px; display: none;'>00:00</div><div id='s-hover' style='width: 0px;'></div><div id='seek-bar' style='width: 0px;'></div></div></div><div id='player-content'><div id='album-art' class=''><img src='https://parv66.github.io/icon/record/record_otherside.png' class='active' id='_1'><img src='https://parv66.github.io/icon/record/record_pigstep.png' id='_2'><img src='https://parv66.github.io/icon/record/record_stal.png' id='_3'><img src='https://parv66.github.io/icon/record/record_wait.png' id='_4'><img src='https://parv66.github.io/icon/record/record_mall.png' id='_5'><div id='buffer-box'>Buffering ...</div></div><div id='player-controls'><div class='control'><div class='button' id='play-previous'><a>&lt;&lt;</a></div></div><div class='control'><div class='button' id='play-pause-button'><a>||</a></div></div><div class='control'><div class='button' id='play-next'><a>&gt;&gt;</a></div></div></div></div></div><div id='minimize'><button id='toggleview' class='button mcbtn'>!</button></div></div>");
	$('#toggleview').click(function(){
		$('#jukebox').toggleClass("jukehide");
	});	
});
//js-cookie end//

$(function () {
  var playerTrack = $("#player-track"),
    albumName = $("#album-name"),
    trackName = $("#track-name"),
    albumArt = $("#album-art"),
    sArea = $("#s-area"),
    seekBar = $("#seek-bar"),
    trackTime = $("#track-time"),
    insTime = $("#ins-time"),
    sHover = $("#s-hover"),
    playPauseButton = $("#play-pause-button"),
    i = playPauseButton.find("i"),
    tProgress = $("#current-time"),
    tTime = $("#track-length"),
    seekT,
    seekLoc,
    seekBarPos,
    cM,
    ctMinutes,
    ctSeconds,
    curMinutes,
    curSeconds,
    durMinutes,
    durSeconds,
    playProgress,
    bTime,
    nTime = 0,
    buffInterval = null,
    tFlag = false,
    albums = [
      "Otherside",
      "Pigstep",
      "Stal",
      "Mall",
      "Wait"
    ],
    trackNames = [
      "Lena Raine",
      "Lena Raine",
      "C148",
      "C148",
      "C148"
    ],
    albumArtworks = ["_1", "_2", "_3", "_4", "_5"],
    trackUrl = [
      "https://raw.githubusercontent.com/parv66/parv66.github.io/master/gui/music/otherside.mp3",
      "https://raw.githubusercontent.com/parv66/parv66.github.io/master/gui/music/pigstep.mp3",
      "https://raw.githubusercontent.com/parv66/parv66.github.io/master/gui/music/stal.mp3",
      "https://raw.githubusercontent.com/parv66/parv66.github.io/master/gui/music/mall.mp3",
      "https://raw.githubusercontent.com/parv66/parv66.github.io/master/gui/music/wait.mp3"
    ],
    playPreviousTrackButton = $("#play-previous"),
    playNextTrackButton = $("#play-next")
  
//cookie check
var exists = sessionStorage.getItem('exists');

if (!exists) {
	console.log("NEWBIE INCOMEING I REPEAt, NEWBIE INCOMMING");
    	sessionStorage.setItem('exists', true);
	Cookies.set('timestamp', 0, {expires: 7}, {path: '/jukebox'});
	Cookies.set('track', -1, {expires: 7}, {path: '/jukebox'});
}
if (exists) {
	console.log("oh well look who it is...");
	Cookies.set('timestamp', 0, {expires: 7}, {path: '/jukebox'});
	var currIndex = Cookies.get('track');
}, 1000;
var loadstamp = (function() {
    var loaded = false;
    return function() {
        if (!loaded) {
            loaded = true;
            audio.currentTime = Cookies.get('timestamp');
        }
    };
})();
//cookie check end
	
  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
	loadstamp();
        playerTrack.addClass("active");
        albumArt.addClass("active");
        checkBuffering();
        audio.play();
      } else {
        playerTrack.removeClass("active");
        albumArt.removeClass("active");
        clearInterval(buffInterval);
        albumArt.removeClass("buffering");
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    cM = seekLoc / 60;

    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 0 || ctSeconds < 0) return;

    if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
    if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
    else insTime.text(ctMinutes + ":" + ctSeconds);

    insTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
  }
  function hideHover() {
    sHover.width(0);
    insTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();
    console.log(currIndex);
    if (!tFlag) {
      tFlag = true;
      trackTime.addClass("active");
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);

    playProgress = (audio.currentTime / audio.duration) * 100;

    if (curMinutes < 10) curMinutes = "0" + curMinutes;
    if (curSeconds < 10) curSeconds = "0" + curSeconds;

    if (durMinutes < 10) durMinutes = "0" + durMinutes;
    if (durSeconds < 10) durSeconds = "0" + durSeconds;

    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
    else tProgress.text(curMinutes + ":" + curSeconds);

    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
    else tTime.text(durMinutes + ":" + durSeconds);

    if (
      isNaN(curMinutes) ||
      isNaN(curSeconds) ||
      isNaN(durMinutes) ||
      isNaN(durSeconds)
    )
      trackTime.removeClass("active");
    else trackTime.addClass("active");

    seekBar.width(playProgress + "%");

    if (playProgress == 100) {
      seekBar.width(0);
      tProgress.text("00:00");
      albumArt.removeClass("buffering").removeClass("active");
      clearInterval(buffInterval);
    }
  }
  
  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
      else albumArt.removeClass("buffering");

      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;
    else --currIndex;
	  
    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr("class", "fa fa-play");
      else {
        albumArt.removeClass("buffering");
      }

      seekBar.width(0);
      trackTime.removeClass("active");
      tProgress.text("00:00");
      tTime.text("00:00");

      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];

      audio.src = trackUrl[currIndex];

      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass("active");
        albumArt.addClass("active");

        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find("img.active").removeClass("active");
      $("#" + currArtwork).addClass("active");
    } else {
      if (flag == 0 || flag == 1) --currIndex;
      else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();

    selectTrack(0);
    playPause();
    $('#jukebox').toggleClass("jukehide");
    audio.loop = true;

    playPauseButton.on("click", playPause);

    sArea.mousemove(function (event) {
      showHover(event);
    });

    sArea.mouseout(hideHover);

    sArea.on("click", playFromClickedPos);

    $(audio).on("timeupdate", updateCurrTime);

    playPreviousTrackButton.on("click", function () {
      selectTrack(-1);
    });
    playNextTrackButton.on("click", function () {
      selectTrack(1);
    });
  }

  initPlayer();
	$(window).on("beforeunload", function() {
	var songid = currIndex - 1;
   	var timestamp = audio.currentTime;
	Cookies.set('timestamp', audio.currentTime, {expires: 7}, {path: '/jukebox'})
	Cookies.set('track', songid, {expires: 7}, {path: '/jukebox'})
    });
});
