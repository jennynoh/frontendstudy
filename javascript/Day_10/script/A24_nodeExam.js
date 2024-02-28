
let addBtn = document.getElementById('add');
let tbody = document.getElementById('addhere');

addBtn.addEventListener('click', addData);

// // submit의 기능 삭제
// addBtn.addEventListener('click', function(event){
//     console.log(event);
//     event.preventDefault();
// });

function addData(){
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();

    if(valName(name)&&valPhone(phone)&&valEmail(email)) {
        let data = `<tr>
                    <td>${name}</td>
                    <td>${phone}</td>
                    <td>${email}</td>
                </tr>`

    tbody.insertAdjacentHTML('beforeend', data);
    
    document.getElementsByTagName('form')[0].reset();
    } else return;
}

function valName(name) {
    if(name.length == 0){
        alert('올바른 이름을 입력해주세요.');
        document.getElementById('name').select();
        return false;
    } return true;
}

function valPhone(phone) {
    if(phone.length != 11){
        alert('올바른 전화번호를 입력해주세요.');
        document.getElementById('phone').select();
        return false;
    } return true;
}

function valEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!(emailRegex.test(email))) {
        alert('올바른 이메일을 입력해주세요.');
        document.getElementById('email').select();
        return false;
    } return true;
}