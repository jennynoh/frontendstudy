/* 반복문과 제어문
    반복문: while, do~while, for 문
    - for문의 종류는 3가지
    - continue, break

    제어문: if, switch~case 문

*/

// 1) for-1
let arr = [1,2,3,4,5];
for(let i=0; i<arr.length; ++i) {
    console.log(arr[i]);
}

// 2) for~in 반복문: index 반환
// j는 index
for(let j in arr) {
    console.log(j);
    console.log(arr[j]);
}

// 3) for~of 반복문: 값 반환
let cities = ['서울', '대전', '대구', '부산'];
for(let city of cities) {
    console.log(city);
}

// [문제] 1~100사이의 데이터 중 3과 5의 배수
let numList = []
for(let i=1; i<=50; ++i) {
    if(i%3==0 || i%5==0){
        numList.push(i);
    }
}
console.log(numList);

//-------- 문자열 & 숫자 parsing
let y = "10a34";
let result = parseInt(y);
console.log(result);

y = "10"; 
result = 10 / y; // auto-unpacking
console.log(result);

y = "10a"; 
result = 10 / y; // NaN => false 처럼 동작한다.
console.log(result); 

// 거짓같은 값 (falsy): null, NaN, 0, -0, '', undefined, document.all 
// *[], {}, Infinity is not falsy!! trueyee~~~~  
console.log('Falsy Test~');
if(10/-0) {
    console.log('과연 실행이 될까요??');
}

let temp = 10/-0; // Infinity & -Infinity; 0, 0.0, -0.0, -0
console.log(temp);


//----- 출력: alert()
//----- 입력: prompt(), prompt("msg"), prompt("msg", 초기값)

// (연습) 키보드로부터 숫자를 입력받아 양수이면 "양수", 음수이면 "음수"로 경고창에 출력
let input = parseInt(prompt("0이 아닌 숫자를 입력하세요."));

if(isNaN(input)) {
    if(input>0){
        alert(`${input}은 양수입니다.`);
    } else if(input<0) {
        alert(`${input}은 음수입니다.`);
    } else {alert("말을 좀 들으세요!");}
} else {
    alert("숫자를 입력하셔야죠!!");
}

//------- isNaN() test
console.log(isNaN("10")); // false; "10" is a number
console.log(isNaN("abx")); // true

//------ 중첩 for 문
// for(let i=)
for(let i=1; i<=5; ++i) {
    for(let j=1; j<=i; ++j) {
        document.write("*");
    }
    document.write("<br>");
};