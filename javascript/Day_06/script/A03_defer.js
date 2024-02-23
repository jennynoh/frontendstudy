/* 실행 위치에 따른 결과 */
/*
    자바스크립트를 실행 시 코드가 html의 head 위치에 포함되어있을 경우
    : html 파싱 도중에 Javascript fetch -> html parsing (파싱시간에 공백생김)
        - async: html parsing과 javascript fetch 동시에 수행
                execute 할 때 parsing을 멈춤
        - defer: html parsing과 javascript fetch 동시에 수행, JS execute를 html pasing 이후로 미룸
                window.onload와 유사하게 동작
 */

let data = '';
for(let i=1; i<=5; ++i) {
    for(let j=1; j<=i; ++j) {
        data += '*';
    }
    data += '<br>';
};

// 원하는 위치의 html 객체 가져오기 
//  html <body>의 dom tree가 형성되고 가져와야함

// 방법 1. Dom tree 완성(event) 후 함수 실행
// window.onload = function() { // window.onload: event
//     let result = document.getElementById("result");
//     console.log("result: "+result);
//     result.innerHTML = data;
// }

// 방법 2. script 코드에 defer 키워드
let result = document.getElementById("result");
result.innerHTML = data;

