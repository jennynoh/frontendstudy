/*---------------------------------------------
    문자열 관련 메소드
    : 문자열은 sequencial하면서 immutable한 타입이다.

    1) charAt(index), at(index): 문자열 내 Index 위티의 문자 1개 반환
    2) startsWith(str), endWith(str), includes(str)
    3) replace(m,n): 특정 문자열 m을 찾아서 n으로 변경
    4) slice(index1, index2): 부분 문자열 반환 (index1 ~ index2 - 1)
    5) substr(), substring(): 부분 문자열 반환 (ES5이후로 substr() 사용 권장 x)

----------------------------------------------*/

let data = 'abcdefg';

// charAt() / at()
console.log(data.charAt(3)); // d
console.log(data.charAt(3)); // d

data = 'Hello, world! Welcome to the JavaScript~'
// data가 Hello로 시작?
console.log(data.startsWith('Hello'));
// data가 ~로 끝남?
console.log(data.endsWith('~'));
// world라는 단어 존재?
console.log(data.includes('world'));
// world 단어의 위치?
console.log(data.search('world')) // 7 = 7부터 11까지
// earth 라는 단어 존재?
console.log(data.search('earth')); // -1 반환 = 없음

// replace(m, n)