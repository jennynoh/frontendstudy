/*--------------------------
    배열을 처리하는 함수
----------------------------

    1)  join() : 전달인자의 문자열을 구분자로 하여, 배열을 문자열로 반환
    2)  reverse() : 배열을 뒤집는다
    3)  slice(start, end) : 배열의 일부분을 반환, 음수 -1 = 마지막 데이터
    4)  sort() : 오름차순 정렬
    5)  splice() : 원본에 영향을 미친다. 부분배열로 추출하거나 다른 값으로 대체
    6)  concat() : 배열 합치기
    7)  push(item) : 배열의 끝에 데이터 삽입, 원본 수정됨, stack 자료구조처럼 자료 삽입 삭제
        pop() : 배열의 끝에 있는 데이터 삭제, push와 특성 똑같음
    8)  shift() : 배열의 첫값을 오려냄
        unshift(item) : item을 배열의 첫값으로 삽입
    9)  toString() : 배열을 문자열로 변환
--------------------------*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// '/'를 기준으로 값들 합치기
console.log(arr.join("/"));

// 원본 뒤집기
console.log(arr.reverse());

// 되돌리기
console.log(arr.reverse());
// 1~5번째 값 순서대로 출력
let temp = arr.slice(1,5);

// 원본이 바뀌면 temp도 바꿀까?
// 깊은복사인지 얕은 복사인지
arr[2] = 30;
console.log(arr);
console.log(temp);  // 안바뀜 = slice는 얕은 복사

// 부분 배열 - slice()
// 처음부터 마지막 직전까지 출력
temp = arr.slice(0,-1);
console.log("부분배열의 결과 : "+temp);

// splice()
// 입력한 index와 그 이후의 값들을 오려서 새로운 배열로 출력
// 원본 배열도 같이 변함
let color = ['빨', '주', '노', '초', '파', '남', '보'];
temp = color.splice(4);
console.log(temp);
console.log(color); //  splice를 하면 원본도 잘려짐

// splice(2,1) = 2번째 index부터 1개의 데이터를 오려냄
color = ['빨', '주', '노', '초', '파', '남', '보'];
temp = color.splice(2,1);
console.log(temp);  // 노
console.log(color); // 빨 주 초 파 남 보 <- 노가 사라짐

//splice()
color = ['빨', '주', '노', '초', '파', '남', '보'];
temp = color.splice(2,1, "Yellow", '노랑');
console.log(color); //노 -> yellow로 대체

//concat()
let food = ['라볶이', '뼈해장국', '파스타'];
let drink = ['물', '주스', '커피'];
let fruit = ['사과', '포도', '딸기'];

let lunch1 = food.concat(drink); // food를 기준으로 drink를 덧붙임임
console.log(lunch1);
let lunch2 = food.concat(drink,fruit); // food를 기준으로 나머지 두 배열을 순서대로 덧붙임
console.log(lunch2);

// toString()
console.log(lunch2.toString());

// push(), pop()
let data = "짜장면";
food.push(data);
console.log(food);  // 짜장면이 food에 추가됨

data = food.pop();
console.log(data);  // 마지막값을 잘라서


// 빈 리스트에 pop하면 무슨 값이 나올까?
food = ['라볶이'];
data = food.pop();  // 라볶이를 꺼내고
data = food.pop();  // 빈 리스트에서 pop을 실행하면
console.log(data);  // undefined가 뜸


// shift(), unshift() : 첫 값을 가져오고 
drink = ['물', '주스', '커피'];
data = drink.shift();
console.log(data);

drink.unshift('맥주');
console.log(drink);

