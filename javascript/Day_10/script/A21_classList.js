
let target = document.getElementById('target');
let content = document.getElementById('content');

// get(): 클래스의 이름 가져오기
document.getElementById('get').addEventListener('click', function(){
    let data = '';
    data = content.classList; // classList의 value 값을 가져옴
    output(data);
});

// add(): class 추가 (1개 또는 여러 개 추가 가능)
document.getElementById('add').addEventListener('click', function(){
    content.classList.add('info', 'green');
});

// remove(): class 삭제 (1개 또는 여러 개 삭제 가능)
document.getElementById('remove').addEventListener('click', function(){
    content.classList.remove('info', 'green');
});

// replace(): 클래스를 교체
document.getElementById('replace').addEventListener('click', function(){
    content.classList.replace('red', 'blue');
});

// contains(): class 존재 여부 확인 (true, false 반환)
document.getElementById('contains').addEventListener('click', function(){
    let result = content.classList.contains('danger');
    output(result);
});

// toggle(): 클래스 토글
// 해당 클래스 사라졌다 존재했다 (반대 속성의 클래스로 변경되는 것은 아님!!!)
document.getElementById('toggle').addEventListener('click', function(){
    content.classList.toggle('visible');
});

function output(data) {
    target.innerHTML = data;
}

