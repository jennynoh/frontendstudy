/*-----------------------------
    Number 클래스: 숫자를 다루는 클래스
    문자열을 숫자로 변환해줌
-----------------------------*/
// 1) Number(): 문자열을 숫자로 변환
console.log('----- Number() -----')
let data = "2.5"
// temp를 숫자로 변환
let temp = Number(data); 

console.log(temp); // 2.5

// 문자열에 문자가 포함되어있을 때: NaN
// 변환가능하지 않은 문자가 포함되어있으면 NaN 반환
data = "2.5a7"
temp = Number(data);
console.log(temp); // NaN

// 2) parse(): 정수로 변환할 수 있는 부분까지만 변환하여 반환함
console.log('----- parse() -----')
console.log(parseInt(data)); // 2 (.부터 변환되지 않음)
console.log(parseFloat(data)); // 2.5 (a부터 변환되지 않음)

// 실수 64비트(Java double형)의 최댓값, 최솟값 
console.log(`Float형 최댓값: ${Number.MAX_VALUE}`) // 최댓값: 1.7976931348623157e+308
console.log(`Float형 최솟값: ${Number.MIN_VALUE}`) // 최솟값: 5e-324

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


