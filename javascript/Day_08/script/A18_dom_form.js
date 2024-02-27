// (1-1) - EventListener 추가
document.getElementById('calcBMI').addEventListener('click', calcBMI);

// (1-2) - calcBMI 함수 정의
function calcBMI() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height.trim().length == 0 || isNaN(height.trim())) {
        alert("키를 정확하게 입력해 주세요.");
        height.select();
        return;
    }

    if(weight.trim().length ==0 || isNaN(weight.trim())){
        alert("몸무게를 정확하게 입력해 주세요.");
        weight.select();
        return;
    }

    let bmi = weight / ((height*0.01)**2);
    let result = `당신의 키는 ${height}cm, 몸무게는 ${weight}kg, BMI는 ${(Math.round(bmi*100))/100}입니다.`;
    
    document.getElementById('target1').innerHTML = result;
}

// 2) select 상자 값 읽어오기
let language = document.getElementById('language');
let calcResult = document.getElementById('calcResult');
let target2 = document.getElementById('target2');

// button event
calcResult.addEventListener('click', function(){
    let value = language.value;
    let result = `선택한 기술스택은 ${value}입니다.`;
    target2.innerHTML = result;
})

// select event
language.addEventListener('change', function(){
    let value = this.value;
    let result = `선택한 기술스택은 ${value}입니다.`;
    target2.innerHTML = result;
})

// 3) [연습문제]
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('equal').addEventListener('click', calculate);
});

function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = 0;

    switch (operator) {
        case '+' :
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }

    document.getElementById('calc_end').innerText = `결과: ${result}`;
}
