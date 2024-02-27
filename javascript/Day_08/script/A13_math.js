/* -----------------------
    Math 객체는 수학과 관련된 값이나 함수를 제공
    1) 값: PI(원주율), E(오일러 상수)
            Math.PI
    2) 함수
--------------------------*/

// Math에 선언된 상수 출력
console.log(`원주율: ${Math.PI}`);
console.log(`오일러상수: ${Math.E}`);

// abs(n): 절대값 반환
// JS Falsy값으로 판정하는 데이터: undefined, null, 0, ''
// Truely 값으로 판정하는 데이터: [], 비어있지 않은 문자열, 0을 제외한 숫자
console.log('------ abs() ------');
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-2')); // 2
console.log(Math.abs(null)); // 0 (null은 falsy 값이기 때문에)
console.log(Math.abs('')); // 0
console.log(Math.abs(' ')); // 0
console.log(Math.abs('Korea')); // NaN
console.log(Math.abs(undefined));  // NaN
console.log(Math.abs());  // NaN
console.log(Math.abs([]));  // 0
console.log(Math.abs([1, -1])); // NaN

// ceil(n): 주어진 숫자보다 큰 가까운 정수 (올림)
console.log('------ ceil() ------');
console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(5.00001)); // 6
console.log(Math.ceil(5)); // 5

console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-5.000001)); // -5

// floor(n): 주어진 숫자보다 작은 쪽으로 가까운 정수
console.log('------ floor() ------');
console.log(Math.floor(0.95)); // 0
console.log(Math.floor(5.00001)); // 6
console.log(Math.floor(5)); // 5

console.log(Math.floor(-0.95)); // -0
console.log(Math.floor(-5.000001)); // -5

// trunc(n): 절삭 (버림)
console.log('------ trunc() ------');
console.log(Math.trunc(0.95)); // 0
console.log(Math.trunc(5.00001)); // 5
console.log(Math.trunc(5)); // 5
console.log(Math.trunc(-0.95)); // -0
console.log(Math.trunc(-5.000001)); // -5

// round(n): 반올림
// 소수점 이하 자릿수 제어 불가능 
// (10**자릿수를 곱한 후 -> round -> 10**자릿수 나눔)
console.log('------ round() ------');
console.log(Math.round(0.95));
console.log(Math.round(5.0001));
console.log(Math.round(5));
console.log(Math.round(-0.95)); // -1
console.log(Math.round(-5.0001)); // -5
console.log(Math.round(-5.6)); // -6
console.log(Math.round(-5.5)); // -5
console.log(Math.round(-5.51)); // -6
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.3)); // 5

console.log(Math.round(5.31093))

// 참고
console.log('------ NaN, Infinity ------');
console.log(0/0); // NaN
console.log(10/0); // Infinity 
console.log(10 / -0);  // -Infinity

// round..? 왜 또
console.log('------ round() ------');
console.log(Math.round(0.95));
console.log(Math.round(5.0001)); // 5
console.log(Math.round(5)); // 5
console.log(Math.round(-0.95)); // -1
console.log(Math.round(-5.0001)); // -5

// min(n), max(n): 최솟값, 최대값
console.log('------ min(), max() ------');
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.max(-1, -5, -3)); // -1
console.log(Math.max()); // -Infinity
console.log(Math.max(-0.95));  // -0.95

console.log(Math.min(1, 5, 3)); // 1
console.log(Math.min(-1, -5, -3)); // -5
console.log(Math.min()); // Infinity
console.log(Math.min(-0.95));  // -0.95

// [연습] ary = [1, 5, 3] 배열에 저장된 데이터의 최댓값, 최솟값을 구하려면
let ary = [1, 5, 3]
console.log(Math.max(...ary)); // 5
console.log(Math.min(...ary)); // 1

// pow(n1, n2): 거듭제곱을 구하는 연산자
console.log('------ pow() ------');
console.log(Math.pow(5,3)); // 125

console.log(Math.pow(4, 0.5)); // 2
console.log(4 ** 0.5); // 2

console.log(Math.pow(4, -2)); // 0.0625
console.log(4 ** -2); // 0.0625

console.log(Math.pow(-1, -5, -3)); // -1
console.log((-1)**(-5)**3); // -1

console.log(Math.pow(-4, -2)); // 0.0635
console.log(Math.pow(-4, 0.5)); // NaN (2i 허수임)

// random(): 난수 발생 함수 (0 이상 ~ 1 미만)
console.log('------ random() ------');
console.log(Math.random());

// 난수 5번 발생 
for(let i=0; i<5; ++i)
    console.log(Math.random());

// 예: [0, 50]의 정수를 5개 발생
for(let i=0; i<5; ++i)
    console.log(Math.floor(Math.random() * 51));

console.log(Math.random() * 51)


