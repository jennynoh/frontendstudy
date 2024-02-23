/*
    1. 함수의 정의
    2. 함수의 호출 (call)
*/

//----- 1) 선언적 함수
// 하단에 있어도 실행 시 hoisting 됨 (위로 올림)
// **if 같은 이름의 함수: 하단에 정의된 함수로 overwriting 됨
function add(a,b) {
    let result = a + b;
    return result;
}

// 실행문
let c = add(10, 20);
console.log(c);
console.log(add("라", "라"));

//----- 2) 표현적 함수
let func = function() {
    console.log("표현함수");
};

// ananymous 함수 호출; 결과: 표현함수
func();


//---- 표현함수 예제.......
function subtract(a,b) {
    return a-b;
}

function myfunction(x,y) {
    let result = x(1,2); // x는 함수
    console.log(typeof x);
    console.log('my function 결과: ' + result);
}

myfunction(subtract, 20);
//------------------------


// setInterval: 함수, 숫자 전달
// n초동안 반복적으로 호출하는 함수
setInterval(function(){
    console.log('a');
}, 1000);


//----- Clock 처리
let clock = document.getElementById("clock"); // target
let start = document.getElementById("start"); // event source
let stop = document.getElementById("stop");  // event souce

// system time 가져오기
let getTime = function(){
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let milsec = now.getMilliseconds();

    return timeData = `${hour}:${min}:${sec}:${milsec}`;
}

clock.innerHTML = getTime();

let timer = '';

start.addEventListener('click', function(){
    timer = setInterval(function() {
        clock.innerHTML = `<span style="color:red;">${getTime()}<\span>`;
    }, 1);
});

stop.addEventListener('click', function(){
    clearInterval(timer); // interval function 실행 멈추기
    clock.innerHTML = `<span style="color:black;">${getTime()}<\span>`;
});

let switchButton = document.getElementById("switch");
let switchPushed = false;

switchButton.addEventListener('click', function(){
    if(!switchPushed){
        switchPushed = true;
        switchButton.setAttribute('value', 'Stop');
        switchButton.setAttribute('style', "background-color: red; color: white;");

        timer = setInterval(function() {
            clock.innerHTML = `<span style="color:red;">${getTime()}<\span>`;
        }, 1);
    } else {
        switchPushed = false;
        switchButton.setAttribute('value', 'Start');

        clearInterval(timer); 
        clock.innerHTML = `<span style="color:black;">${getTime()}<\span>`;
        switchButton.setAttribute('style', "background-color: green; color: white;");
    }
    
});
