/* 
    서버에서 아래와 같은 형태의 데이터를 전송받았다.
    적절히 조합해서 html 문서로 출력
*/

let receivedData = [
    {id : '001',
    'name' : '홍길동',
    license : '정보처리기사'},
    {id : '002',
    'name' : '임꺽정',
    license : '빅데이터분석기사'},
    {id : '003',
    'name' : '전우치',
    license : 'ADSP'},
    {id : '004',
    'name' : '손오공'},
    {id : '005',
    'name' : '사오정',
    license : '운전면허 1종 보통'},
];

// table 
let table = `<table>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>자격증</th>
                </tr>`;

// 서버에서 가져온 데이터 스크립트로 추가
receivedData.forEach(function(item){
    let {id, name, license="없음"} = item
    table += `<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${license}</td>
            </tr>`
});

// table tag 닫기
table += '</table>';

// id="result"인 부분에 data 삽입
document.getElementById("result").innerHTML = table;

