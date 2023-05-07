console.log("Welcome to Spotify");
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let icons = document.getElementById('icons');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "Doobey", filePath:"1.mp3"},
    {songName: "Bhool Bhulaiyaa 2 Title Track:Tanishk Bagchi", filePath:"2.mp3"},
    {songName: "Phone mila ke:Raftaar", filePath:"3.mp3"},
    {songName: "Dotara: Jubin Nautiyal", filePath:"4.mp3"},
    {songName: "Kudiyee Ni Teri: Selfiee", filePath:"5.mp3"},
    {songName: "Param Sundari: Mimi", filePath:"6.mp3"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("span")[0].innerText= songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value = progress;
})
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})

let makeAllPlays= ()=>{
    myPlay.forEach((element)=>{
            element.classList.remove('fa-pause');
            element.classList.add('fa-play');
        })
}
let songIndex=0;
let myPlay = Array.from(document.getElementsByClassName('myPlay'));
myPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        console.log(e.target);
        makeAllPlays();
        audioElement.currentTime=0;
        audioElement.src = `${songIndex}.mp3`;
        audioElement.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>1){
        songIndex-=1;
    }
    else{
        songIndex=1;
    }
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-play');
    document.getElementById(`${songIndex}`).classList.add('fa-pause');
    audioElement.currentTime=0;
    audioElement.src = `${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex = 6;
    }
    else{
        songIndex+=1;
    }
    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-play');
    document.getElementById(`${songIndex}`).classList.add('fa-pause');
    audioElement.currentTime=0;
    audioElement.src = `${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
