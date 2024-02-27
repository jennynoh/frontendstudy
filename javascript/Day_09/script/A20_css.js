/*-------------------------------------
    1) 문서의 데이터에 접근하여 읽어온다.
--------------------------------------*/
document.getElementById('change').addEventListener('click', change);
document.getElementById('show').addEventListener('click', show);
document.getElementById('changeColor').addEventListener('click', changeColor);
document.getElementById('mode').addEventListener('click', changeMode);

function change() {
    let song = document.getElementById('song')
    song.style.color = 'white';
    song.style.backgroundColor = '#252525';
    song.style.fontSize = '1.5em';
};

function show() {
    let box = document.querySelector('div.box');
    box.style.visibility = 'visible';
};

let timer;
function changeColor(){
    timer = setInterval(function(){
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        document.querySelector('div.box').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }, 1000)
};

function changeMode() {
    let mode = document.getElementById('mode');
    let bodyTag = document.querySelector('body');
    if(mode.value == '다크모드') {
        bodyTag.style.backgroundColor = '#252525';
        bodyTag.style.color = '#F0F3FA';
        mode.value = '일반모드';
    } else {
        bodyTag.style.backgroundColor = '#F0F3FA';
        bodyTag.style.color = '#252525';
        mode.value = '다크모드'
    }
}
