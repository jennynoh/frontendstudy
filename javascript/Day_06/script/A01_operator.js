/* 자바스크립트 연산자 */
/*
    1) 산술연산자: + - * / % **
    2) 증감연산자: ++ --
    3) 비교연산자: == (===: 자료형도 일치) != (!==) > < >= <=
    *동등연산자 (==): auto-unboxing해서 내부의 value값이 같은지 반환
    *일지연산자 (===): 타입과 value가 모두 일치하는지 반환

    4) 논리연산자: && || !(단항)
    5) 삼항연산자: 조건연산자 (조건식)?참:거짓
    *참, 거짓 자리에 실행문을 쓸 수 있다 (Java는 x, 식 밖에 못넣음)

    6) typeof 연산자: 단항연산자, 오른쪽의 데이터(변수)의 타입 반환
    7) 비트연산자: >> << ~(비트반전 연산자=1's complement 연산자)
    8) 대입연산자: lv = rv
    9) 복합대입연산자: += 등등

    # 추가된 연산자
    전개연산자 (spread): ...
        - 배열, 객체에 포함된 요소를 펼치는 연산자
        - 함수의 Parameter로 사용되는 경우
        - 대입연산자에서 사용



*/

let a = 3;
console.log('3의 세제곱의 결과: ' + a**3);

let x = '3';
console.log(x == 3); // true
console.log(x === 3); // false

// 숫자 < y < 숫자: between 연산이 아니다!
let y = 10;
console.log(8< y < 20); // true
console.log(8 < y < 5); // true
console.log(8 < y < 1); // false

// y가 8 ~ 20 사이의 숫자인지 확인하려면..
console.log(y>8 && y<20);

/*
short circuit (단축평가)
- 왼쪽 연산의 결과에 따라 오른쪽 연산을 할 것인가 말 것인가 결정하는 기능
- 관계 연산자에서 사용됨

&&
    T && ? ==> ?
    F && ? ==> F

||
    T || ? ==> T
    F || ? ==> ?
*/

// 논리연산자 short circuit
let b = 1;

b > 1 || console.log('이것은 출력이 될까요???'); // false || 수행한다!!
console.log(b > 1 || console.log('출력 1')); // 출력되고 undefined

b == 1 || console.log('그렇다면 이건???');
console.log(b == 1 || console.log('그렇다면 이건???')); // true

// 5) 삼항연산자 (조건연산자)
let c = 5;
let d = 3;
c > d ? 
    console.log(`${c}가 ${d}보다 크다.`): 
    console.log(`${c}가 ${d}보다 작다.`);


// 6) spread 연산자
let obj1 = {name : '홍길동'};
let obj2 = {name : '임꺽정'};

let obj = [obj1, obj2]; // obj를 iterable 객체로 만듬
let temp = [...obj];
console.log(obj);
console.log(temp);

//----
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 12, 13, 14, 15];
let arr = [...arr1, ...arr2];
console.log(arr);

//---
let obj3 = {name : '손오공'};
let obj4 = {age : 30};

// iterable test-1
let objtest = {...obj3, ...obj4};
console.log(objtest);

// iterable test-2
let dic = {name : '손오공', age : 30};
let sprd = {...dic};
console.log(sprd);

// {name : '손오공', age : 30} is not iterable either
// {} object를 []에 담으면 iterable 하지 않음 
// obj = [...obj3, ...obj4]; // error: object 3 is not iterable
// console.log(obj);


//-- 외부예제
const slime = {
    name: '슬라임'
};
const cuteSlime = {
    ...slime,
    attribute: 'cute'
};
const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);