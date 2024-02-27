/*----------------------------------------------
    문자열 관련 메소드
    : 문자열은 sequence면서 immutable한 타입이다.

    1) charAt(index), at(index) : 문자열 내 index 위치의 문자 1개 반환
    2) startsWith(str), endWith(str), includes(str) : 
    3) replace(m,n) : 특정 문자열 m을 찾아서 n으로 변경
    4) slice(index1, index2) : 부분 문자열 반환 (index1 ~ (index2 - 1)위치까지 반환)
    5) substr(), substring() : 부분 문자열 반환 (ES5 이후에는 substr()사용을 권장하지 않음)
----------------------------------------------*/

let data = 'abcdefg';

// charAt() / at()
console.log(data.charAt(3));    // d
console.log(data.at(3));        // d

data = 'Hello, world! Welcome to the JavaScript~'
// data가 Hello로 시작하나요?
console.log(data.startsWith('Hello'))   // 네!
// data가 ~로 끝나나요?
console.log(data.endsWith('~'));    // 네!
// world이라는 단어가 잇ㅅ나요?
console.log(data.includes('world')); // 내!
// world라는 단어는 어디에 위치해있나요?
console.log(data.search('world'));  // 7번 째에 있슴 = 7번째부터~11까지
// earth라는 단어는요?
console.log(data.search('earth'));  // -1 <- 그런단어는업서요


// replace(m,n)
// 결과값을 반영할 변수를 하나 만드는 것이 좋다.
let text = data.replace('Hello', 'Hi~'); // 인사를 좀 건방지게 바꿔보기
console.log(text);

// slice()
// 앞뒤 규칙이 있어 ㅣindex1ㅣ > ㅣindex2ㅣ여야 값이 출력됨
data.slice(5,10);
console.log(data.slice(5, 10)); // ', wor'까지 반환
//console.log(data.slice(10, 5)); // index1이 index2보다 절대값이 작으면 값이 출력되지 않음

console.log(data.slice(-5, -1)); // 음수값의 경우엔 마지막부터 계산해서 가능
//console.log(data.slice(-5, -1)); //이건 불가능


// substr() << 쓰지말라고 친절하게 취소선 그어줌 -> 조만간 depreated 될 듯
// substr(5,10) = 5번 index부터 이후 10개 값을 출력
console.log('substr() : '+data.substr(5,10));


// substring() : 부분 문자열 추출
// () 안에 index값만 받으므로 음수가 들어가면 안된다.
// substring(5,10) = 5번 index부터 10번 index까지 출력
console.log('substring : '+ data.substring(5,10));    // ', wor'
console.log('앞 < 뒤 규칙 : '+ data.substring(10,5)); // ', wor'
// -> 앞 뒤 숫자 순서/크기와 상관없이 값 출력
console.log('음수가 들어가면? : '+ data.substring(-3,2)); // -3부터 2번 index까지
//-> -3이라는 index는 없으므로 0으로 처리됨


// split(str) : 구분 문자열을 전달하여 문자열을 배열(array)로 분리
let arr = data.split(' ')
console.log('split()의 타입 : ' + typeof arr);
console.log('반환된 배열의 길이 : ' + arr.length);

arr.forEach(item => console.log(item)); // data문자열이 공백을 기준으로 쪼개져서 나옴


// find(function) : 배열 <<<- 월요일에 다시 설명
//console.log(arr.find();

// trim() : 좌우 공백 제거 함수
data = ' Hello~    ';
console.log(data.length);   // 11 : 문자열의 길이, 공백까지 전부 포함해서 count됨
console.log('좌우 공백을 모두 제거한 문자열 : ' + data.trim());
console.log('공백이 제거된 문자열 길이' + data.trim().length);
            