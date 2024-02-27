/*
    math 객체는 수학과 관련된 값이나 함수를 제공
    1) 값 : PI (원주율),  E(오일러 상수),  
        Math.PI << 이런식으로 호출해서 사용
    2) 함수 : 
*/      

// Math에 선언된 상수 출력\
console.log('----Math.값----------------------')
console.log(`원주율 : ${Math.PI}`);     // 3.141~
console.log(`오일러 상수 : ${Math.E}`); // 2.718~

// abs(n) : 절대값 반환
//      JS Falsy값으로 판정하는 데이터  : 0, null, undefined, ''
//      JS Truely값으로 판정하는 데이터 : 
console.log('----Math.abs()----------------------')

console.log(Math.abs(-1));      // 1    << 일반 숫자열은 절대값 처리
console.log(Math.abs('-2'));    // 2

console.log(Math.abs(null));    // 0    << null/ 공백/ 빈 숫자열은 0으로 처리
console.log(Math.abs(''));      // 0
console.log(Math.abs(' '));     // 0

console.log(Math.abs('Korea'));     //NaN   << 문자열/ 미정의 문자열은 NaN처리
console.log(Math.abs('undefined')); //NaN
console.log(Math.abs());            //NaN

console.log(Math.abs([]));          // 0    << 빈 리스트는 0으로 처리
console.log(Math.abs([1, -1]));     //NaN   << 숫자/문자열 리스트는 NaN처리
console.log(Math.abs(['a','b']));   //NaN


// ceil() : 주어진 숫자보다 큰 쪽으로 가까운 정수 ( 올림 처리 )
console.log('----Math.ceil()--------------------------------');
// 양수
console.log(Math.ceil(0.95));       // 1
console.log(Math.ceil(5.00001));    // 6
console.log(Math.ceil(5));          // 5
// 음수
console.log(Math.ceil(-0.95));      // -0  << 정수 0이 아닌 실수 -0.0으로 처리
console.log(Math.ceil(-5.00001));   // -5


// floor() : 주어진 숫자보다 작은 쪽으로 가까운 정수 ( 내림 처리 )
console.log('----Math.floor()--------------------------------');
// 양수
console.log(Math.floor(0.95));       // 0
console.log(Math.floor(5.00001));    // 5
console.log(Math.floor(5));          // 5
// 음수
console.log(Math.floor(-0.95));      // -1
console.log(Math.floor(-5.00001));   // -6


// trunc() : 소수점 아래 부분 버림 처리
console.log('----Math.trunc()--------------------------------');
// 양수
console.log(Math.trunc(0.95));       // 0
console.log(Math.trunc(5.00001));    // 5
console.log(Math.trunc(5));          // 5
// 음수
console.log(Math.trunc(-0.95));      // -0
console.log(Math.trunc(-5.00001));   // -5


// round() : 반올림 처리
// 강제로 정수로 만들기 때문에 소수점 아래 숫자를 살릴 수 없음
// 정 하고싶다면 원하는 소수점 만큼 10의 n승을 곱한 후, 소수점 처리를 하고 다시 곱한 10의 n숭을 나눠야 함
console.log('----Math.round()--------------------------------');
// 양수
console.log(Math.round(0.95));       // 1
console.log(Math.round(5.00001));    // 5
console.log(Math.round(5));          // 5

console.log(Math.round(5.5));        // 6  << 양수라면 소수점이 0.5 이상일 떄 올림 처리
console.log(Math.round(5.5));        // 6

// 음수
console.log(Math.round(-0.95));      // -1
console.log(Math.round(-5.00001));   // -5
console.log(Math.round(-5.6));       // -6
console.log(Math.round(-5.5));       // -5  << 음수라면 0.5 이하일 시 내림 처리
console.log(Math.round(-5.51));      // -6  << 소수점이 0.5 초과일 떄만 올림 처리

/// 참고
// ZeroDivision
console.log('----NaN, Infinity');
console.log(Math.round(0 / 0));         // NaN
console.log(Math.round(10 / 0));        // Infinity(양의 무한대)
console.log(Math.round(10 / -0));       // -Infinity(음의 무한대)    << -0 일떄 부호만 살아남음


// min(), max() : 최솟값, 최댓값
console.log('----Math.max()--------------------------------');
console.log(Math.max(1, 5, 3));       // 5
console.log(Math.max(-1, -5, -3));    // -1
console.log(Math.max());              // -Infinity   << 왜???
console.log(Math.max(-0.95));         // -0.95

console.log('----Math.min()--------------------------------');
console.log(Math.min(1, 5, 3));       // 1
console.log(Math.min(-1, -5, -3));    // -5
console.log(Math.min());              // Infinity   << 이건 왜?>??
console.log(Math.min(-0.95));         // -0.95

// [연습] ary = [1, 5, 3]에서 최솟값 최댓값을 구해보자
// 전개 연산자 (...) 를 이용해서 리스트 괄호를 벗겨서 연산
// 최댓값
ary = [1, 5, 3]
console.log(Math.max(...ary));  // 5
// 최솟값
console.log(Math.min(...ary));  // 1


// pow(n1, n2) : 거듭제곱을 구하는 연산자
console.log('----Math.pow()--------------------------------');
console.log(Math.pow(5, 3));        // 125
// 걍 5**3 쓰는게 더 편함 ㅎㅎ
console.log(Math.pow(4, 0.5));      // 2
// 이것도 걍 4**0.5 ㄱ
console.log(Math.pow(4,-2));        // 0.0625
// 이것도 ㅇㅇ

// 음수가 앞에 오게 되면?
// console.log(-5**3);  << Syntax오류(실행 전 오류), -가 단항식의 앞에 오면 연산자 우선순위가 어그러짐
   console.log((-5)**3);    // 이렇게 바꿔야함

console.log(Math.pow(-4,-2));        // 0.0625
console.log(Math.pow(-4,-0.5));      // 0.0625

// random() : 난수 발생 (0이상 ~ 1 미만)
console.log('----Math.random()--------------------------------');
for(let i =0; i<5; ++i)
    console.log(Math.random())
// 예시 : 0이상 50 이하의 정수를 5번 출력하시오
for(let i =0; i<5; ++i)
    console.log(Math.floor(Math.random() * 51));
    // 0이상 51 미만의 랜덤 숫자를 만든 후 소수점 버림 처리