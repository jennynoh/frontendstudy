
// (1-1) 

document.getElementById('calc1').addEventListener('click', calcBMI);


// (1-2)
function calcBMI() {
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    if (height.value.trim().length == 0 || isNaN(height.value.trim())) {
        alert("키를 정확히 입력해주세요!");
        height.select();
        return;
    }
    if (weight.value.trim().length == 0 || isNaN(weight.value.trim())){
        alert("몸무게를 정확히 입력해주세요!");
        weight.select();
        return;
    }
    let bmi = weight.value / ((height.value*0.01)**2);
    let result = `당신의 키는 ${height.value}cm, 몸무게는 ${weight.value}kg, BMI는 ${(Math.round(bmi*100))/100}입니다`;

    document.getElementById('target1').innerHTML = result;
}


// 2) select 상자의 값 읽어오기
let language = document.getElementById('language');
let calc2    = document.getElementById('calc2');
let target2  = document.getElementById('target2');

// 버튼에 걸린 이벤트
calc2.addEventListener('click', function() {
    let value = language.value;
    let result = `선택한 기술력은 ${value}입니다..`;
    target2.innerHTML = result;
});

// select 상자에 걸린 이벤트
language.addEventListener('change', function(){
    let value = this.value;
    let result = `선택한 기술력은 ${value}입니다..`;
    target2.innerHTML = result;
});



// 3) [연 습 문 제]
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('equal').addEventListener('click', calculate);
  });

  function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result = 0;

    switch (operator) {
      case '+':
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
        result = 'Invalid operator';
    }

    document.getElementById('calc_end').innerText = '결과: ' + result;
  }