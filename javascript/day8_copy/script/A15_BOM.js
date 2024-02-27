/*
    Window 객체가 제공해주는 메소드
    1) alert()
    2) confirm()
    3) prompt()
*/

let btn_1 = document.getElementById('btn_01');
let btn_2 = document.getElementById('btn_02');
let btn_3 = document.getElementById('btn_03');
let result = document.getElementById('result');

btn_1.addEventListener('click', function() {    // click = press + release
    alert('경고창입니다.');
    result.innerHTML = '<span style="color:red;"> 당신은 경고창을 눌러버렷음</span>';
});

btn_2.addEventListener('click', function() {
    let check = confirm('당신이 누른게 맞음?');
    if (check)
        result.innerHTML = '<span style="color:red;">그렇군요</span>';
    else
        result.innerHTML = '<span style="color:red;">ㅇㅋ..</span>';
});

btn_3.addEventListener('click', function() {
    let data = prompt('당신의 이름은?');
    result.innerHTML = `<span style="color:blue;">축하한다! 당신의 이름은 ${data}이다!</span>`
});



// 새 창 열기
let btn_4 = document.getElementById('btn_04'); 
btn_4.addEventListener('click', function(){
    window.open('./notice.html', 'win', 'height=600px,left100px, width=400px')
});
