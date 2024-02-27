/*-------------------------
    1) Input 데이터를 읽어 결과 처리하기
-------------------------*/
// (1-1) - EventListener 추가
document.getElementById('calcBMI').addEventListener('click', calcBMI);

// (1-2) - calcBMI 함수 정의
function calcBMI() {
    let height = document.getElementById('height').value.trim();
    let weight = document.getElementById('weight').value.trim();
    let heightField = document.getElementById('height');
    let weightField = document.getElementById('weight');

    if(height.length == 0 || isNaN(height)) {
        alert("키를 정확하게 입력해 주세요.");
        heightField.select(); // 해당 입력필드 선택
        return;
    }

    if(weight.length ==0 || isNaN(weight)){
        alert("몸무게를 정확하게 입력해 주세요.");
        weight.select(); // 해당 입력필드 선택
        return;
    }

    let bmi = weight / ((height*0.01)**2);
    let result = `당신의 키는 ${height}cm, 몸무게는 ${weight}kg, BMI는 ${(Math.round(bmi*100))/100}입니다.`;
    
    document.getElementById('target1').innerHTML = result;
}


/*-------------------------
    2) select 상자 값 읽어오기
-------------------------*/
let language = document.getElementById('language');
let calcResult = document.getElementById('calcResult');
let target2 = document.getElementById('target2');

// button event: button click해야 결과 출력
calcResult.addEventListener('click', function(){
    let value = language.value;
    let result = `선택한 기술스택은 ${value}입니다.`;
    target2.innerHTML = result;
})

// select event: select 하면 바로 띄워줌
language.addEventListener('change', function(){
    let value = this.value;
    let result = `선택한 기술스택은 ${value}입니다.`;
    target2.innerHTML = result;
})


/*-------------------------
    3) 연습문제
-------------------------*/
// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('equal').addEventListener('click', calculate);
// });

document.getElementById('equal').addEventListener('click', calculate);
document.getElementById('clear').addEventListener('click', clear);

function calculate() {
    let num1Field = document.getElementById('num1');
    let num2Field = document.getElementById('num2');

    let num1 = document.getElementById('num1').value.trim();
    let num2 = document.getElementById('num2').value.trim();

    let operator = document.getElementById('operator');
    let resultField = document.getElementById('resultField');
    let result = 0;

    if(num1.length == 0 || isNaN(num1)){
        alert("숫자를 정확히 입력해주세요.");
        num1Field.select();
        return;
    }

    if(num2.length == 0 || isNaN(num2)) {
        alert("숫자를 정확히 입력해주새요.");
        num2Field.select();
        return;
    }

    // parseFloat(num1), parseFloat(num2)
    switch (operator) {
        case '+' : result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        default:
            result = 'Invalid Operator';
    }

    resultField.value = result;
}

function clear() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultField').value = '';
}


/*-------------------------
    4) radio button 값 처리하기
-------------------------*/
document.getElementById('getResult').addEventListener('click', function(){
    // 어차피 radio 버튼은 하나만 선택할 수 있어서 
    // let gender = document.querySelector('input[type="radio"]:checked');

    // radio 버튼이 복수개일 때: 
    let gender = document.querySelector('.gender:checked');
    let genderTemp = gender.value;

    document.getElementById('target3').innerHTML = genderTemp;
});

/*-------------------------
    5) checkbox 값 처리하기
-------------------------*/
document.getElementById('getResult2').addEventListener('click', function(){
    let series = document.querySelectorAll('.netflix:checked'); // array type
    let seriesTemp = '';

    for(let i=0; i<series.length; ++i){
        seriesTemp += series[i].value + ' ';
    }

    document.getElementById('target4').innerHTML = seriesTemp;
});

/*-------------------------
    6) Textarea에 입력된 값 처리
-------------------------*/
// 글자수 count
// keyup: 키보드 눌렀다 떼는 event
document.getElementById('textbox').addEventListener('keyup', function(){
    let count = this.value.length;
    document.getElementById('count').innerHTML = `(${count}자)`;
});

// textarea내의 글자를 읽어와서 출력
document.getElementById('getResult3').addEventListener('click', function() {
    let text = document.getElementById('textbox').value;
    document.getElementById('target5').innerHTML = text;
});

/*-------------------------
    7) 기타
-------------------------*/
document.getElementById('color').addEventListener('change', function(){
    let selectedColor = document.getElementById('color').value;
    document.getElementById('selectedColor').innerHTML = selectedColor;
})

document.getElementById('date').addEventListener('change', function(){
    let selectedDate = document.getElementById('date').value;
    document.getElementById('selectedDate').innerHTML = selectedDate;
});
