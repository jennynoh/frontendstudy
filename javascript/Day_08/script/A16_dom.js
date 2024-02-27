/*------------------------------
    1. DOM에 접근해서 객체를 받아오는 방법
-------------------------------*/
     // 1) getElementById('아이디')
let id = document.getElementById('author');
console.log(id);
console.log(id.length); // undefined

// 2) getElementsByTagName()
// 배열로 반환받는다.
let tags = document.getElementsByTagName('p');
console.log(tags); // HTMLCollection(4): [p, p.poem, p, p.poem]
console.log(tags.length); // 4 = p tag 4개

// 3) getElementsByClassName()
// Class name이 일치하는 요소를 HTMLColeection으로 반환함
let poem = document.getElementsByClassName('poem');
console.log(poem); // HTMLCollection(2): [p.poem, p.poem]
console.log(poem.length); // 2


/*---------------------------------
    2. CSS의 선택자를 이용해서 객체에 접근하기
----------------------------------*/
// 1) querySelector('CSS 선택자')
let poem2 = document.querySelector('.poem');
console.log(poem2); // 첫번째 poem class 반환
console.log(poem2.length); // undefined

// 2) querySelectorAll('CSS 선택자')
// 문서내 CSS 선택자에 맞는 모든 데이터를 NodeList 배열로 반환
let poem3 = document.querySelectorAll('.poem');
console.log(poem3); // NodeList(2): [p.poem, p.poem]
console.log(poem3.length); // 2

/*---------------------------------
    3. HTML 요소의 특정 속성을 조회하거나 치환하는 메소드
----------------------------------*/
// 조회: HTMLObject.getAttribute(속성명)
// 변경: HTMLObject.setAttribute(속성명, 변경할 값)

// [연습] 꽃의 이미지를 수정 (when button pressed)
// change = eventSource, image = eventTarget
document.getElementById("change").addEventListener('mouseenter', function(){
    // let alt = document.getElementById("image").getAttribute('alt');
    // alert(alt);
    document.getElementById('image').setAttribute('src', './images/flower.jpg')
});

document.getElementById('change').addEventListener('mouseleave', function(){
    document.getElementById('change', function() {
        document.getElementById('image').setAttribute('src', './images/oguri.jpg')
    })
})