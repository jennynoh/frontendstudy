
let images =   ['./images/face1.png',
                './images/face2.png',
                './images/face3.png',
                './images/face4.png'];

let eventSource = document.getElementsByTagName('span')[0];
let eventTarget = document.getElementsByTagName('img')[0];
let divTarget = document.getElementById('target');


// 변검 시작
let i = 1;
let timer;

eventSource.addEventListener('mouseenter', function() {
    timer = setInterval(function(){
        let myImg = images[i++];
        eventTarget.setAttribute('src', myImg);
        if(i>3) i=0;
    }, 300); 
});

// 변검 끝
eventSource.addEventListener('mouseleave', function() {
    clearInterval(timer);
});
