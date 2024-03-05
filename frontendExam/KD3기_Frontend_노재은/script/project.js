// 전역변수 선언
let i = 0;
let totalPrice = 0;     // 총 음식값

setInterval(changeTime, 1000);
let menulist = document.getElementsByName("food");
let menuqty = document.getElementsByClassName("menuqty");

confirmEvent();  // 각 메뉴에 주문 수를 입력 시 이벤트 거는 함수

document.getElementById("order").onclick = orderCheck;
document.getElementById("cancel").onclick = resetForm;

/* -----------------------------
    1. 메뉴 선택 시 이벤트 걸기 
-------------------------------*/
// 메뉴가 선택되거나 수량을 변경했을 때 계산할 수 있도록 각 8개의 데이터에 이벤트 걸기
function confirmEvent() {
    for (let j = 0; j < menulist.length; j++) {
        menulist[j].addEventListener('click', calcPrice);
        // 메뉴 선택되면 인분 선택 Inputbox 활성화 
        menulist[j].addEventListener('click', function(){
            let menuName = menulist[j].getAttribute("class");
            let targetField = document.getElementById(menuName);
            if(menulist[j].checked == true) {
                targetField.disabled = false;
            } else targetField.disabled = true;
        })
    }

    for (let j = 0; j<menuqty.length; j++) {
        menuqty[j].addEventListener('keyup', calcPrice);
    }
}


/* -----------------------------
    2. 가격 계산 함수  
-------------------------------*/
// 각 음식의 주문 수량을 변경했을 때 계산하는 함수 : Code Here
function calcPrice() {
    let selectedMenuList = selectedMenu();
    totalPrice=0; // totalPrice 초기화 

    let tax;
    let tip;
    let total; // total = 음식값 + 세금 + 봉사료

    for(let j=0; j<selectedMenuList.length; ++j) {
        let menu = selectedMenuList[j].getAttribute("class");
        let price = parseFloat(selectedMenuList[j].getAttribute("value"));
        let ea = parseFloat(document.getElementById(menu).value);

        let menuPrice = price * ea;
        totalPrice += menuPrice;
    }

    tax = totalPrice * 0.02;
    tip = totalPrice * 0.05;
    total = totalPrice + tax + tip;

    if(!isNaN(total)) showPrice(tax, tip, total);
}

// 선택된 메뉴 리스트 반환 함수
function selectedMenu() {
    let selectedMenuList = [];
    for(let j=0; j<menulist.length; ++j){
        if(menulist[j].checked) selectedMenuList.push(menulist[j]);
    }
    return selectedMenuList;
}

// 계산된 가격 보여주는 함수
function showPrice(tax, tip, total) {
    let taxField = document.getElementById('tax');
    let tipField = document.getElementById('tip');
    let totalField = document.getElementById('total');

    taxField.setAttribute("value", tax);
    tipField.setAttribute("value", tip);
    totalField.setAttribute("value", total);
}

/* -----------------------------
    3. 실시간 시간 계산 함수 
-------------------------------*/
// 시간 변경하는 함수 :  // Code Here
function changeTime() {
    let currTime = document.getElementById('currTime');

    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let milsec = now.getMilliseconds();
    timeData = `${hour}:${min}:${sec}:${milsec}`

    currTime.setAttribute("value", timeData);
}


/* -----------------------------
    4. 주문하기 - 사용자 검증 함수 
-------------------------------*/
// 주문하기를 클릭했을 때 사용자 입력 검증 및 나머지 작업 수행
function orderCheck() {
    // Code Here: 주문자의 이름, 전화번호, 주소 입력되었는지 확인
    if(valName() && valPhone() && valAddress()) {
        orderCreate();
    }
}

function valName() {
    let nameField = document.getElementById('name');
    let nameVal = nameField.value.trim();
    if(nameVal.length == 0) {
        alert("주문자 이름을 입력해 주세요.");
        nameField.select();
        return false;
    } return true;
}

function valPhone() {
    let phoneField = document.getElementById('phone');
    let phoneVal = phoneField.value.trim();
    if(phoneVal.length != 11) {
        alert("전화번호는 11자리 숫자로 입력해 주세요.");
        phoneField.select();
        return false;
    } return true;
}

function valAddress() {
    let addressField = document.getElementById('address');
    let addressVal = addressField.value.trim();
    if(addressVal.length == 0) {
        alert("주문자 주소를 입력해 주세요.");
        addressField.select();
        return false;
    } return true;
}

function valMenu() {
    let selectedMenuList = selectedMenu();
    if(selectedMenuList.length == 0) alert("선택된 메뉴가 없습니다.");
    
    let ea = 0;
    for(let j=0; j<selectedMenuList.length; ++j) {
        let menu = selectedMenuList[j].getAttribute("class");
        ea += parseFloat(document.getElementById(menu).value);
    }
    if (isNaN(ea) || ea == 0) alert("주문수량을 확인해 주세요.");
    console.log(ea);
    
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

    valMenu();

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
    resetForm();
}

/* -----------------------------
    5. form에 입력된 내용 reset  
-------------------------------*/
function resetForm() {
    document.getElementsByTagName('form')[0].reset();
}
