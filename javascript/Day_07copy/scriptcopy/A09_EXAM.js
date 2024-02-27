/*
    서버에서 아래와 같은 형태의 데이터를 전송받았다
    적절히 조합해서 html문서로 출력해보셈
*/

let receivedData = [
    {id : '001',
    'name' : '홍길동',
    license : '정보처리기사'},
    {id : '002',
    'name' : '임꺽정',
    license : '빅데이터 분석 기사'},
    {id : '003',
    'name' : '전우치',
    license : 'ADSP'},
    {id : '004',
    'name' : '손오공'},
    {id : '005',
    'name' : '사오정',
    license : '운전면허 1종 보통'}
];

// 반복하면 안되는 부분 ( 이미 완성된 코드)
let data = `<table>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>자격증</th>
                </tr>`;


// data 뒷부분에 붙일 코드
// receivedData에서 item을 forEach문을 사용하여 꺼내는 반복문 작성
receivedData.forEach(function (item) {
    // receivedData의 각 값에서 id, name, license를 가져와 item에 삽입
    let {id,name,license="없음"} = item
    // 이후 1회 반복할 때마다 data에 덧붙일 item의 id, name, license를 입력
    data += `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${license}</td>
    </tr>`
}); 
// 반복이 끝나면 </table>을 추가하여 
data += '</table>';

// 본 html에서 id가 result인 부분을 가져와 data를 삽입
document.getElementById("result").innerHTML = data;

