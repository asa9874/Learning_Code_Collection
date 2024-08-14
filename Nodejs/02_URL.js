// HTTP 모듈을 불러옵니다. 이 모듈은 HTTP 서버를 생성하는 데 사용됩니다.
var http = require('http');

// 파일 시스템 모듈을 불러옵니다. 파일을 읽고 쓰는 작업을 수행할 수 있습니다.
var fs = require('fs');

// URL 모듈을 불러옵니다. URL을 파싱하여 유용한 정보를 추출하는 데 사용됩니다.
var url = require('url');

// HTTP 서버를 생성합니다. 서버는 클라이언트로부터 요청(request)을 받을 때마다 이 콜백 함수가 실행됩니다.
var app = http.createServer(function(request, response) {
    // 요청된 URL을 가져와 _url 변수에 저장합니다.
    var _url = request.url;
    
    // URL을 파싱하여 쿼리 문자열(query string)을 추출하고 queryData 변수에 저장합니다.
    // url.parse() 메서드의 두 번째 인자는 true로 설정되어, 쿼리 문자열이 객체 형식으로 변환됩니다.
    var queryData = url.parse(_url, true).query;
    
    // 콘솔에 파싱된 쿼리 데이터를 출력합니다. 예: { id: 'Html' }
    console.log(queryData);

    // 사용자가 루트 URL (/)에 접근하면, 기본적으로 /index.html 파일을 제공하도록 _url을 변경합니다.
    if(_url == '/') {
        _url = '/index.html';
    }

    // 사용자가 favicon.ico를 요청하면 404 상태 코드를 반환하고 요청 처리를 중단합니다.
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }

    // 응답 헤더에 200 상태 코드를 설정하여 요청이 성공적으로 처리되었음을 나타냅니다.
    response.writeHead(200);
    
    // 클라이언트에게 쿼리 데이터의 'id' 값을 응답으로 보냅니다.
    // 예를 들어, /?id=Html로 요청한 경우 'Html'이 응답으로 전송됩니다.
    response.end(queryData.id);
});

// 서버가 3000번 포트에서 클라이언트 요청을 대기하도록 설정합니다.
app.listen(3000);