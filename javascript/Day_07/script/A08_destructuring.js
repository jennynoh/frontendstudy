// 배열의 요소 뽑아내기 
let one = [10, 20, 30];

let a = one[0];
let b = one[1];
let c = one[2];
console.log(a,b,c);

// 1) 배열 요소를 각각 분해해서 변수에 저장
let [a1, b1, c1] = one;
console.log(a1, b1, c1);

// 2) 필요한 요소만 받을 때
let [, , c2] = one;
console.log(c2);

let[a3, b3, c3, no] = one;
console.log(no);

// 3) 두 변수의 값 교환하기
let x = 10;
let y = 20;

[y,x] = [x,y];
console.log('교환된 x y 값 출력: ', x, y);

/*---------------------------
    구조분해 할당 (객체)
----------------------------*/
let objOne = {
    name : '손오공',
    age : 29
};

// before
let son = objOne['name'];

// now
let {name, age} = objOne;
console.log('객체의 구조분해 할당: ', name, age);

let objTwo = {
    name : '저팔계',
    age : 3
};

let {name : nickname, age : hisage} = objTwo;
console.log(nickname, hisage);

// default parameter 사용
let {name : name2, age : age2, address = '서울'} = objTwo;
console.log(name2, age2, address);


