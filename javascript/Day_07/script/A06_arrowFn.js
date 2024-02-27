// 선언적 함수
function one(x,y) {
    return x - y;
}

let oneResult = one(12,10);
console.log(oneResult);

// 표현적 함수 (함수 리터럴을 변수에 대입)
let two = function(x,y) {
    return x-y;
};
console.log(two(43, 12));

// 화살표 함수 (ES6) =>
// 함수 리처럴 방식 변경
    // 1) function 키워드 삭제
    // 2) () => {}
    // 3) 중괄호 안에 구문이 한줄이면 return과 { }를 생략할 수 있음
let three = (x, y) => x-y;
console.log(three(50,33));

let four = function(x, y) {
    console.log(`${x} + ${y} = ${x+y}`);
}

four = (x, y) => console.log(`화살표 함수 실행: ${x} + ${y} = ${x+y}`);
four(30,20);

    // 4) 매개변수가 한 개일때는 ()를 생략할 수 있음
    // 5) 매개변수가 없으면 () 생략 불가
let five = x => {
    const result = x**2;
    console.log(`${x}의 제곱은 ${result}이다.`);
}

five(3);

let six = () => console.log('매개변수가 없는 함수의 실행~!');
six();

    // 6) 함수 매개변수 위치에 default 값을 설정할 수 있음
let seven = (x, y=0) => console.log(`${x} + ${y} = ${x+y}`);
// x=0, y 로하면 두 번째 인자가 undefined
// default 값은 오른쪽에서부터 채워야함
seven(5, 10);
seven(12);

// Interval 함수에서의 =>함수식
setInterval(function(){
    // 작업내용
}, 1000);

setInterval(() => {
    // 작업내용
}, interval);


