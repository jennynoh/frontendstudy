/* 시험점수 처리 프로그램 */
let score = document.getElementsByClassName('subjectScore');
let total = 0;

// 점수를 입력하는 input 상자에 이벤트 추가
for(let i=0; i<score.length; ++i) {
    score[i].addEventListener('keyup', scoreInput);
}

// 결과확인 (confirm) 버튼에 이벤트 추가
document.getElementById('confirm').addEventListener('click', finalResult);

function scoreInput() {
    let subjectScore = this.value; // this = score[i]
    if((subjectScore < 0 || subjectScore > 100) || isNaN(subjectScore)) {
        alert('쟘수를 0~100점 사이로 입력해주세요.');
        this.select(); // this = score[i]
        return;
    }
    total += parseFloat(this.value);
};

function finalResult() {
    let totalScore = 0;

    let subjects = document.getElementsByClassName('sub');
    for(let i=0; i<subjects.length; ++i) {
        totalScore += parseFloat(subjects[i].value)*0.1;
    }

    let projects = document.getElementsByClassName('prj');
    for(let i=0; i<projects.length; ++i) {
        totalScore += parseFloat(projects[i].value)*0.2;
    }

    let attendance = document.getElementsByClassName('attd');
    for(let i=0; i<attendance.length; ++i) {
        totalScore += parseFloat(attendance[i].value)*0.2;
    }


    let finalData = `<b style="background-color:yellow; font-weight:bold;">${totalScore}</b>`
    document.getElementById('avg').innerHTML = finalData;
}
