function loadData() {
  // XMLHttpRequest 객체 생성
  var xhr = new XMLHttpRequest();
  
  // 서버로 보낼 요청 설정 (GET 요청, 비동기)
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  
  // 요청 상태가 변할 때 실행되는 콜백 함수
  xhr.onreadystatechange = function() {
      // 요청 완료(readyState가 4)되고, 성공(status가 200)한 경우
      if (xhr.readyState === 4 && xhr.status === 200) {
          // 서버에서 받은 응답 데이터 출력
          var response = JSON.parse(xhr.responseText);
          document.getElementById('result').innerHTML = 
              '<h3>' + response.title + '</h3><p>' + response.body + '</p>';
      }
  };
  
  // 서버에 요청 전송
  xhr.send();
}