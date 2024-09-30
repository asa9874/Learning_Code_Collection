function loadData2() {
    // XMLHttpRequest 인스턴스 생성
    var xhr = new XMLHttpRequest();
  
    // GET 요청을 JSONPlaceholder로 보냄
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  
    // 요청 헤더 설정 (여러 개 설정 가능)
    xhr.setRequestHeader('Custom-Header', 'TestHeaderValue');
    xhr.setRequestHeader('Another-Header', 'AnotherValue');
  
    // 요청 상태 변화에 대한 처리
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Response:', xhr.responseText);
        } else {
          console.log('Error:', xhr.status);
        }
      }
    };
  
    // 요청 전송
    xhr.send();
  }
  
  function loadData3() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // 모든 응답 헤더를 문자열로 가져오기
          var headers = xhr.getAllResponseHeaders();
          document.getElementById('result3').innerHTML = '<p>' + headers + '</p>';
          
        }
      }
    };
  
    xhr.send();
  }