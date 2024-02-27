// Number 클래스는 숫자를 다루는 클래스

// 문자열을 숫자로 변환
let data = "2.5";
let temp = Number(data);

console.log(temp);


// 문자열을 숫자로 변환 ( 이 방법은 불가능 )
data = "2.5a7";         // 문자열이 섞이면 Number함수에서는 NaN으로 인식함
temp = Number(data);    // NaN << 변환 불가

console.log(temp);      // 불가능



// 문자열을 변환하는 또 다른 방법

// parseInt = 변환이 가능한 부분까지만 숫자열을 정수로 읽고, 변환 처리
console.log(parseInt(data));    // 2

// parseFloat = 변환이 가능한 부분까지만 숫자열을 실수로 읽고, 변환 처리
console.log(parseFloat(data));  // 2.5

console.log(`실수형 최댓값 : ${Number.MAX_VALUE}`);
console.log(`실수형 최솟값 : ${Number.MIN_VALUE}`);