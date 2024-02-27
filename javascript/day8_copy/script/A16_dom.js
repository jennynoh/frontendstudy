// DOM에 접근해서 객체를 받아오는 법

// 1) getElementById('아이디')
console.log('-----getElementByid()-------------------');
let id = document.getElementById('writer');
console.log(id);

// 2) getElementsByTagName
console.log('-----getElementsByTagName()-------------------');
let tags = document.getElementsByTagName('p');
console.log(tags.length);
console.log(tags);

// 3) getElementsByClassName('클래스명)
console.log('-----getElementsByClassName()-------------------');
let poem = document.getElementsByClassName('poem');
console.log(poem.length);
console.log(poem);

// CSS의 선택자를 이용하여 객체를 가져오는 방법
// querySelector('CSS 선택자')
console.log('-----querySelector()-------------------');
let poem2 = document.querySelector('.poem');

console.log('length2 : '+poem2.length);  //undefined
console.log('poem2 : '+poem2);

// querySelectorAll('CSS선택자')
// 문서 내의 CSS선택자에 맞는 모든 데이터를 배열로 전환
// 차이점
//      getElementsByClassName : HTMLCollection 타입으로 반환
//      querySelectorAll : nodeList로 반환

console.log('-----querySelectorAll()-------------------');
let poem3 = document.querySelectorAll('.poem');

console.log('length3 : '+poem3.length); // 2
console.log('poem3 : '+poem3);          // getElementsByClassname() 메서드와 차이

// HTML 요소의 특정 속성을 조회하거나 치환하는 메소드
// 조회 : HTMLObject.getAttribute('가져올 속성명')
// 치환 : HTMLObject.setAttribute('변경할 속성명, 바꿀 값')

// [연습] : '변경' 버튼을 누르면 꽃의 이미지를 수정
// change = eventSource // image = eventTarget
document.getElementById('change').addEventListener('mouseenter', function() {
    //let alt = document.getElementById('image').getAttribute('alt');
    //console.log(alt);
    document.getElementById('image').setAttribute('src', './images/flower.jpg')
})

document.getElementById('change').addEventListener('mouseleave', function() {
    document.getElementById('image').setAttribute('src', './images/oguri.jpeg')
})

//////////////////////////////////////////////////////////////////////
//////////안///////////////댐/////////////////////////////