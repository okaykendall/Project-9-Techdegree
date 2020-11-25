

// //gen variables

const pause = document.getElementsByClassName("pause-btn");
const scrolling = document.getElementById('screenAnimation');
const audios = document.getElementsByTagName('audio');
const shuffleBTN = document.getElementById('shuffleBTN');
const buttonDIV = document.getElementsByClassName('btn')[0];
const speaker = document.getElementsByClassName("speaker");

const playBtn = document.getElementsByTagName('li');
const songs = document.getElementsByTagName('audio');

//song play on click function

const playSong = function () {
    const songTitle = this.getAttribute('data-title');
    const songArtist = this.getAttribute('data-artist');
    const attribute = this.getAttribute('data-sound');
    for (i=0; i < songs.length; i++) {
        songs[i].pause();
        songs[i].currentTime = 0;
    }
    document.getElementById(attribute).play();
    scrolling.innerHTML = `NOW PLAYING - ${songTitle} - ${songArtist}`;
};

for (i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener('click', playSong, false);
}

//pause song function

function pauseSong() {
    for (i = 0; i < audios.length; i++) {
        audios[i].pause();
        scrolling.innerHTML = "PAUSED";
    }
} 

//shuffle functionalityyy

const shuffleSong = function () {
    const randomSong = Math.floor(Math.random() * audios.length);
    const songName = audios[randomSong].getAttribute('data-title');
    const songArtist = audios[randomSong].getAttribute('data-artist');
    console.log(randomSong, audios[randomSong]);

    audios[randomSong].play()
    for (btn of playBtn) {
        if (songName == btn.getAttribute('data-title')) {
            btn.className += ' playing'
            speaker.className +=' animateSVG'
        } else {
            btn.className += ''
        }
    }
    scrolling.innerHTML = `NOW PLAYING - ${songName} - ${songArtist}`;
};

shuffleBTN.addEventListener('click', shuffleSong, false);


//handler to prevent one song playing at same time as another

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
            // playBtn.classList.remove(' playing');
        }
    }
}, true);

// document.body.addEventListener('click', function(e) {
//     if (!e.target) {
//         document.body.classList.remove(' playing');
//         document.body.classList.remove(' pushAnimation');
//     }
// });

// possible keyboard listeneresssss

// document.addEventListener('keydown', e => {
//     // console.log(e.keyCode);
//     switch (e.keyCode) {
//         case 32: // space
//             isPlaying ? audios.play() : audios.pause();
//             break;
//         case 37: // left arrow
//             audios.currentTime += -5;
//             break;
//         case 39: // right arrow
//             audios.currentTime += 5;
//             break;
//     }
// });

