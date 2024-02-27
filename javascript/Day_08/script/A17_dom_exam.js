let eventSource = document.getElementsByTagName('span')[0]
let eventTarget = document.getElementsByTagName('img')[0]

let timer;
let i=1;

eventSource.addEventListener('mouseenter', function(){
    timer = setInterval(function(){
    eventTarget.setAttribute('src', `./images/face${++i}.png`);
    if (i>3) i=0;
    }, 500)
});

eventSource.addEventListener('mouseleave', function(){
    clearInterval(timer);
})