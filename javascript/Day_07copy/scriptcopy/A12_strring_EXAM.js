
// 버튼과 input 기능을 id를 기준으로 가져오기
let check = document.getElementById('check');
let userid = document.getElementById('userid');
let birthday = document.getElementById('birthday');

// 이벤트 트리거가 되는 버튼 정의
// 버튼 클릭 시 사용자정의 함수 validation이 실행됨
check.addEventListener('click', validation);

function validation() {
    //alert("몰?루"); // 실행 잘되는거 확인하면 삭제
    
    let id = userid.value;  // id를 문자열로 가져옴
    if(!(id.trim().length >=5 && id.trim().length <= 10))  {
        alert('아이디를 5~10자 내로 입력하세요!');
        userid.select(); // 아이디 입력창을 선택 후 리턴
        return; 
    }
    // 공백을 제거하여 입력정확도를 높히기
    // 입력받은 문자열 길이가 5~10 사이인지 확인 -> 아니면 경고

    let birth = birthday.value;
    if (birth.trim().length != 8 || isNaN(birth)) {
        alert('생년월일을 8자리 숫자로 입력하세요!');
        birthday.select();
        return;
    }   
    // 8자가 아니거나 숫자가 아니면 out

    alert("참 잘했어요!") // 다 통과했으면 칭찬해주기   
    
}