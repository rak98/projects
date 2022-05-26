console.log("welcome to RJ SONGS")
// intialize the variable
let songindex=0;
let audioelement= new Audio("1.mp3");
let masterplay= document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");



let songs = [
    {songname:"good day wake up" , filepath:"1.mp3",coverpath:"1.jpg"},
    {songname:"as u fade away" , filepath:"2.mp3",coverpath:"2.jpg"},
    {songname:"play dead" , filepath:"3.mp3",coverpath:"3.jpg"},
    {songname:"enough" , filepath:"4.mp3",coverpath:"4.jpg"},
    {songname:"immortal" , filepath:"5.mp3",coverpath:"5.jpg"},
    {songname:"winning" , filepath:"6.mp3",coverpath:"6.jpg"},
    {songname:"get through" , filepath:"7.mp3",coverpath:"7.jpg"},
]


masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
 })

 audioelement.addEventListener("timeupdate",()=>{
     progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
     myprogressbar.value=progress;
 }) 

 myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})


