document.getElementById('join').addEventListener('click', function(){
    if(valId() && valPwd() && valName() && valPhone()){
        // 값 읽어오기
        let userid = document.getElementById('id').value.trim();
        let userpwd = document.getElementById('pwd').value.trim();
        let username = document.getElementById('name').value.trim();
        // input[type='radio'].gender:checked
        let gender = document.querySelector('.gender:checked').value;
        let hobbies = document.querySelectorAll('.hobby:checked');
        let phonenum = document.getElementById('localnum').value + document.getElementById('phonenum').value.trim();
        
        let hobby='';
        // hobbies.forEach(item) {
        //     hobby += item.value + " "
        // };

        for(let i=0; i<hobbies.length; ++i){
            hobby += hobbies[i].value + ' ';
        }

        let result = `아이디: ${userid}\n비밀번호: ${userpwd}\n이름: ${username}\n성별: ${gender}\n취미: ${hobby}\n전화번호: ${phonenum}`;
        alert(`아래 정보로 회원가입을 진행합니다. \n${result}`);
        // document.getElementById('joinForm').reset();
    } else return;
})

// Reset all input fields
document.getElementById('cancel').addEventListener('click', function(){
    // let inputFields = document.getElementsByTagName('input');
    // for(let i=0; i<inputFields.length; ++i){
    //     inputFields[i].value = '';
    // }
    document.getElementById('joinForm').reset();
});

// 아이디 val
function valId() {
    let useridField = document.getElementById('id');
    let useridVal = document.getElementById('id').value.trim();
    if(useridVal.length < 3 || useridVal.length > 5){
        alert('아이디를 3~5자로 입력해 주세요.');
        useridField.select();
        return false;
    } else return true;
}

// 비밀번호 validation
function valPwd() {
    let pwdField = document.getElementById('pwd');
    let pwdVal = document.getElementById('pwd').value.trim();
    let pwdConfirmField = document.getElementById('pwdConfirm');
    let pwdConfirmVal = document.getElementById('pwdConfirm').value.trim();

    if(pwdVal.length < 3 || pwdVal.length > 5) {
        alert('비밀번호를 3~5자로 입력해주세요.');
        pwdField.select();
        return false;
    } else if(pwdConfirmVal != pwdVal) {
        alert('비밀번호가 일치하지 않습니다.');
        pwdConfirmField.select();
        return false;
    } else return true;
}

// 이름 val
function valName() {
    let nameField = document.getElementById('name');
    let nameVal = nameField.value.trim();
    if(nameVal.length == 0) {
        alert('이름을 입력해 주세요.');
        nameField.select();
        return false;
    } else return true;
}

// 전화번호 val
function valPhone() {
    let phoneField = document.getElementById('phonenum');
    let phoneVal = document.getElementById('phonenum').value.trim();
    if(phoneVal.length != 8) {
        alert('올바른 전화번호를 입력해 주세요.');
        phoneField.select();
        return false;
    } else return true;
}