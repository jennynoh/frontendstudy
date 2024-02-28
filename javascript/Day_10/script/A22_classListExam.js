let modeBtn = document.getElementById('mode');
let body = document.getElementsByTagName('body')[0];

modeBtn.addEventListener('click', function(){
    if(modeBtn.value == 'Dark Mode') {
        body.classList.replace('lightmode', 'darkmode');
        modeBtn.value = 'Light Mode';

    } else {
        body.classList.replace('darkmode', 'lightmode');
        modeBtn.value = 'Dark Mode';
    }
});