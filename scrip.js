console.log("Welcome to my Music Player");
// Initialize the variables
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let musicGIF = document.getElementById("musicGIF");

let audioElement = new Audio("baton ko teri.mp3");
// let songs = [
//     {songName: "Baaton Ko Teri",filePath : "song/baton ko teri.mp3",
//     coverPath : "covers/baaton ko teri.jpg"},
//     {songName: "Tujhe Kitna Chahne Lage",filePath : "song/tujhe-kitna-chahne-lage.mp3",
//     coverPath : "covers/tujhe-kitna-chahne-lage.jpg"},
//     {songName: "Sanam Re",filePath : "song/sanam-re.mp3",
//     coverPath : "covers/sanam re.jpg"},
//     {songName: "Shubh Baller",filePath : "song/shubh-baller.mp3",
//     coverPath : "covers/baller.jpg"},
//     {songName: "Never Fold",filePath : "song/never-fold.mp3",
//     coverPath : "covers/never fold.jpg"}
    
// ]
// Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        musicGIF.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        musicGIF.style.opacity = 0;
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-pause-circle");
    }
})

// // Listen to Events
// document.addEventListener("timeupdate");


// // Listen to Events
audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

Array.from(document.getElementById("playArrow")).forEach(element => {
    element.addEventListener("click",(e)=>{
        index = parseInt(e.target.id);
        audioElement.src = "${index}.mp3";
        audioElement.currentTime = 0;
        audioElement.play();
    })
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");
    }
    )
 e.target.classList.add("fa-circle-pause");

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
element.addEventListener("click",(e)=>{
    makeAllPlays();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src = "never-fold.mp3";
    audioElement.currentTime = 0;
    audioElement.play();
})
})