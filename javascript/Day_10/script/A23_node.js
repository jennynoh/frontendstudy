
let list = document.getElementById('list');

// before.addEventListener('click', beforeFunc);

// function beforeFunc() {
//     let data = '<li>콩나물 국밥</li>';
//     // list.innerHTML = data; // 기존의 데이터를 새로운 데이터로 대체한다.
//     list.insertAdjacentHTML('beforeend', data); // ul태그 끝에 붙음
// };

// 1) afterbegin: ul 태그 안, 맨 처음
let afterbegin = document.getElementById('afterbegin');

afterbegin.addEventListener('click', function(){
    let data = '<li>콩나물 국밥</li>';
    list.insertAdjacentHTML('afterbegin', data);
});

// 2) afterend: ul 태그 밖, 뒤
let afterend = document.getElementById('afterend');

afterend.addEventListener('click', function(){
    let data = '<li>콩나물 국밥</li>';
    list.insertAdjacentHTML('afterend', data);
})

// 3) beforebegin: ul 태그 밖, 앞
let beforebegin = document.getElementById('beforebegin');

beforebegin.addEventListener('click', function(){
    let data = '<li>콩나물 국밥</li>';
    list.insertAdjacentHTML('beforebegin', data);
})

// 4) beforeend: ul 태그 안, 맨 뒤
let beforeend = document.getElementById('beforeend');

beforeend.addEventListener('click', function(){
    let data = '<li>콩나물 국밥</li>';
    list.insertAdjacentHTML('beforeend', data);
})