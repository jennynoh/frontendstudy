// 함수의 정의
// 1) 함수 내부에서 arguments라는 배열객체를 이용하여 정확한 인자의 개수를 전달 받도록 제어
// 2) 매개변수 위치에서 ...연산자 (spread)를 이용하여 배열의 형태로 나머지 인자를 받아냄 
function add(a,b) {
    // arguments: 전달인자 배열
    console.log('인자의 개수: ' + arguments.length);
    // if(arguments.length != 2) return 0;
    return a+b;
}

let result = add(10, 11);
console.log(result);

result = add(10); // b: undefined
console.log(result); // 결과: NaN

result = add(1,2,3,4,5);
console.log(result); // 1+2만 반환 

//---- 나머지 전달인자 받는 인자
console.log("----- new function -----");

function add(a,b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);

    return a+b;
}

add(1,2,3,4,5);

//-----함수를 반환하는 함수
function temp () {
    return function () {
        console.log(2*3);
    }
}

temp(); // 아무일도 일어나지 않음
let x = temp();
console.log(typeof x);
x();
temp()();

//-----함수를 반환하는 함수 -2
console.log("-----함수를 반환하는 함수를 반환하는 함수-----")
function temp2 (a,b) {
    let result = a*b;
    return function () {
        // let result = "inner local";
        // 자바스크립트 closure
        return result;
    }
}

temp2(5,7);
console.log(temp2(5,7))
console.log(temp2(5,7)());
