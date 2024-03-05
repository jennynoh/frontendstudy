// 전역변수 선언
let i = 0;
let totalPrice = 0;     // 총 음식값

setInterval(changeTime, 1000);
let menulist = document.getElementsByName("food");
let menuqty = document.getElementsByClassName("menuqty");

confirmEvent();  // 각 메뉴에 주문 수를 입력 시 이벤트 거는 함수

document.getElementById("order").onclick = orderCheck;

// 메뉴가 선택되거나 수량을 변경했을 때 계산할 수 있도록 각 8개의 데이터에 이벤트 걸기
function confirmEvent() {
    for (let j = 0; j < menulist.length; j++) {
        // Code here
        menuqty[j].addEventListener('keyup', calcPrice);
        // 메뉴를 선택할 수 없어서 생략해야됨,, 
        menulist[j].addEventListener('click', calcPrice);
    }
}

// 각 음식의 주문 수량을 변경했을 때 계산하는 함수 : Code Here
function calcPrice() {
    let tax = document.getElementById('tax');
    let tip = document.getElementById('tip');
    let total = document.getElementById('total'); // total = 음식값 + 세금 + 봉사료
    // this: event source, id: menu명 
    let menu = this.id;

    // 선택한 (check된 ) 데이터의 value값을 이용하여 음식값을 조회
    document.getElementsByClassName(menu)[0].checked = true;

    let price = document.getElementsByClassName(menu)[0].value;      // 체크된 데이터의 음식값을 가져옴
    let ea = this.value;         // 주문 수량 가져옴
    totalPrice += price * ea;


    // 세금은 음식값 2%, 봉사료 음식값 5%을 계산하여 total 영역에 입력.
    tax.value = totalPrice * 0.02;
    tip.value = totalPrice * 0.05;
    total.value = totalPrice + totalPrice*0.02 + totalPrice*0.05;

}

// 시간 변경하는 함수 :  // Code Here
function changeTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let now = `${hour}시 ${minute}분 ${second}초`;

    let currTime = document.getElementById('currTime');
    currTime.value = now;
}

// 주문하기를 클릭했을 때 사용자 입력 검증 및 나머지 작업 수행
function orderCheck() {
    // Code Here: 주문자의 이름, 전화번호, 주소 입력되었는지 확인
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');

    if(name.value.trim().length == 0) {
        alert('주문자 이름을 입력해주세요.');
        name.focus();
        return;
    }

    if(phone.value.tim().length != 11 || isNaN(phone.value)) {
        alert('전화번호를 11자리 숫자로 입력해주세요.');
        phone.focus();
        return;
    }

    if(address.value.trim().length == 0) {
        alert('주문자 주소를 입력해주세요.');
        address.focus();
        return;
    }

    orderCreate();
}

// 최종 주문을 완료함수
function orderCreate() {
    // Code Here
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let orderTime = document.getElementById('currTime').value;
    let tax = document.getElementById('tax').value;
    let tip = document.getElementById('tip').value;
    let total = document.getElementById('total').value;

    let bill = `
    * 주문자 : ${name}
    * 연락처 : ${phone}
    * 주 소 : ${address}
    * 주문시간 : ${orderTime}
    * 세금  : ${tax}원
    * 봉사료 : ${tip}원
    * 총결제금액 : ${total}원
    주문 감사합니다.
    `

    alert(bill);

    // Code Here : 폼의 모든 값을 삭제
    document.getElementById('inputForm').reset();
}
