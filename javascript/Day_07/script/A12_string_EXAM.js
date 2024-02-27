// 버튼과 input 기능을 id 기준으로 가져오기
let check = document.getElementById('check');
let userid = document.getElementById('userid');
let birthday = document.getElementById('birthday');

// 이벤트 트리거가 되는 버튼 정의
// 버튼 클릭 시 사용자정의 함수 validation 실행
check.addEventListener('click', validation);

function validation() {
    let id = userid.value;
    if
}