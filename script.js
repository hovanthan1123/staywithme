let container = document.getElementById('container');
let count=50;
for(var i=0;i<1000;i++){
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * container.clientWidth);
    let widthSnow = Math.floor(Math.random() * 20);
    let timeSnow = Math.floor((Math.random() * 5) + 5);
    let blurSnow = Math.floor((Math.random() * 20) + 1);
    // console.log(leftSnow);
    let div = document.createElement('div');
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);

}
const ghh=document.querySelector('#container');
function playSound(){
    const audio = new Audio('y2mate.bz - goblin-stay-with-me-mv-ost.mp3');
    audio.play();
}
// ghh.onclick=()=>{
    playSound();
// }

// for(var i=0;i<100;i++){
//     let leftSnow = Math.floor(Math.random() * container.clientWidth);
//     let topSnow = 0;
//     let widthSnow = Math.floor(Math.random() * 20);
//     let timeSnow = Math.floor((Math.random() * 5) + 5);
//     let blurSnow = Math.floor((Math.random() * 20) + 1);
//     // console.log(leftSnow);
//     let div = document.createElement('div');
//     div.classList.add('snow');
//     div.style.left = leftSnow + 'px';
//     div.style.top = topSnow + 'px';
//     div.style.width = widthSnow + 'px';
//     div.style.height = widthSnow + 'px';
//     div.style.animationDuration = timeSnow + 's';
//     div.style.filter = "blur(" + blurSnow + "px)";
//     container.appendChild(div);

// }