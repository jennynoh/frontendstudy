/*------------------------------------------------------------

-------------------------------------------------------------*/

let one = [10,20,30];

// 분해
let o = one[0];
let n = one[1];
let e = one[2];
console.log(o,n,e);

// 배열 요소를 각각 분해해서 변수에 저장하는 방법
let[o1,n1,e1] = one;
console.log(o1, n1, e1);
// 위와 결과가 똑같음

// 2) 분해하는 방법 ( 필요한 요소만!!)
// 데이터를 알 때만 사용 가능
let[,n2] = one; // 20, 두 번째 요소의 값
let[,e2] = one; // 30, 세 번째 요소의 값
console.log(e2);

let[o3,n3,e3,no] = one;
console.log(no);    // one에 없는 값을 분해하면 notdefined 처리됨

// 3) 두 변수의 값 교환하기
// 예전 구닥다리 방식 

let x = 10;
let y = 20;
/*
let temp;
temp = x;
x = y;
y = temp;
*/

// 최신(10년전) 방법
[y,x] = [x,y];
console.log('교환된 x y 값 출력 : ', x, y);

/*---------------------------------------------------
    구조분해 할당(객체)
---------------------------------------------------*/
let objOne = {
    nm : '손고쿠',
    age : 29
};

/* 구닥다리 방식
let name = obj['name']; // 손고쿠
*/

let {nm, age}= objOne;
console.log('객체의 구조분해 할당 : ', nm, age);


let objTwo = {
    nm2 : '저팔계',
    age2 : 3
};
// obj선언에 사용된 매개변수명이 아닌 다른 이름 사용시 undefined error가 발생
// 같은 이름을 쓰거나, 별칭 처리를 하면 해결
let {nm2 : nickname, age2 : hisage} = objTwo;
console.log(nickname, hisage);  

//default parameter 사용하기
let {nm2, age2, address = '서울'}= objTwo;
console.log(nm2, age2, address);