/*--------------------------------
    window 객체 메소드
    : alert(), confirm(), prompt()
---------------------------------*/

let btn_01 = document.getElementById('btn_01');
let btn_02 = document.getElementById('btn_02');
let btn_03 = document.getElementById('btn_03');
let result = document.getElementById('result');

btn_01.addEventListener('click', function(){
    alert('경고창입니다.');
    result.innerHTML = '<span style="color:red">경고창을 눌렀습니다.</span>';
    // innerText: 문자열만 있을때 해당 텍스트 출력
});

btn_02.addEventListener('click', function(){
    let check = confirm("확인창을 클릭했습니다.");
    // console.log(typeof check);
    // console.log(check);

    if(check)
        result.innerHTML = '<span style="color:red">확인을 클릭했습니다.</span>';
    else
        result.innerHTML = '<span style="color:red">취소를 클릭했습니다.</span>';
});

btn_03.addEventListener('click', function(){
    let data = prompt("이름을 입력하세요.");
    // console.log(typeof data);
    // console.log(data);

    result.innerHTML = `<span style="color:blue">당신의 이름은 ${data}입니다.</span>`
});

let btn_04 = document.getElementById('btn_04');
btn_04.addEventListener('click', function(){
    window.open('./notice.html', 'win', 'height=600px, left=100px, width=400px, menubar=no')
    // window.open('http://www/naver.com', '', '')
    // url: 내 문서, 외부창
});
