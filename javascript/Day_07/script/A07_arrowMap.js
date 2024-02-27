/* 
    forEach(): 배열과 함께 사용하는 함수
    - item, index, array를 순환
    - 반환하는 값이 없다. 
*/
let arr = [10, 11, 100, 101, 1000];
console.log('arr의 크기: ' + arr.length);

// 1) 배열의 개수만큼 순환하는 함수
let total = 0;
arr.forEach(function(item, index, ary){
    // console.log(item, index, ary);
    total += item;
});
console.log('배열의 총합: '+total);

    // forEach의 결과값 받기 (return이 가능할까?)
    // let reault = arr.forEach(function(item, index, ary){
    //     total += item;
    //     return total;
    // });
    // console.log('result: '+result); // result is undefined

// 2) forEach() 내부 함수를 화살표함수로 변경
total = 0;
arr.forEach(item => total+=item);
console.log('배열의 총합: '+total);

console.log('-----------------------------')
/* -------------------------------
    map(): 배열의 요소를 변경할 수 있는 함수
    - 배열요소 전체를 순환하면서 결과값으로 새로운 배열을 만들어 반환한다.
    - 원본배열의 값은 변경하지 않는다.
*/

let result = arr.map(item => item * 2);
console.log('map 함수 처리 결과: ' + result);
console.log('원본 배열: ' + arr);


console.log('-----------------------------')
/* -------------------------------
    filter(): 배열의 요소를 삭제 (필터링)
    - value: number
    - 배열요소를 순환하면서 true가 반환되면 그 조건이 true인 요소값으로 
    새로운 배열을 만들어냄
    - 원본 배열의 값은 변경하지 않는다!
*/

result = arr.filter(item => {
    if(!item%2) return true;
    else return false;
})

result = arr.filter(item => !(item%2));

console.log('filter 함수 처리 결과: ' + result);
console.log('원본 배열: ' + arr);