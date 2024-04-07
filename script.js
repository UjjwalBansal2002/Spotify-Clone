
let songIndex = 0;
let audioElement = new Audio('./assets/Kalaastar.mp3');
let masterPlay = document.querySelector('#masterPlay');
let myProgressBar = document.querySelector('#myProgressBar');
let gif = document.querySelector('#gif');
let songTitle = document.querySelector('#songTitle');
let songItem = Array.from(document.querySelectorAll('.songItem'))

let songs = [
    { songName: "Kalaastar", filePath: "./assets/Kalaastar.mp3", coverPath: "./assets/song-img.jpg" },
    { songName: "Desi Kalakaar", filePath: "./assets/Desi Kalakaar.mp3", coverPath: "./assets/song-img.jpg" },
    { songName: "Love Dose", filePath: "./assets/LOVE DOSE.mp3", coverPath: "./assets/song-img.jpg" },
    { songName: "Blue Eyes", filePath: "./assets/Blue Eyes.mp3", coverPath: "./assets/song-img.jpg" },
    { songName: "First Kiss", filePath: "./assets/First Kiss.mp3", coverPath: "./assets/song-img.jpg" },
    { songName: "Dheere Dheere", filePath: "./assets/Dheere Dheere.mp3", coverPath: "./assets/song-img.jpg" },
];

songItem.forEach((e, i) => {
    // console.log(e,i)
    e.querySelectorAll('img')[0].src = songs[i].coverPath;
    e.querySelectorAll('.songName')[0].innerText = songs[i].songName;

})

// audioElement.play()

// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    } else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;

    }
})



audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt(audioElement.currentTime / audioElement.duration * 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((e) => {
        // console.log(e)
        e.classList.remove('fa-circle-pause')
        e.classList.add('fa-circle-play')

    })
}

Array.from(document.querySelectorAll('.songPlay')).forEach((e) => {
    e.addEventListener('click', (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
        // audioElement.src = `./assets/${index}.mp3`;
        audioElement.src = songs[songIndex].filePath
        songTitle.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})

document.querySelector('#next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex = 0;
    }else{
        songIndex +=1;
    }
    audioElement.src = songs[songIndex].filePath
    songTitle.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
document.querySelector('#previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
    audioElement.src = songs[songIndex].filePath
    songTitle.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})