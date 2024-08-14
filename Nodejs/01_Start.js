// http 모듈을 불러옵니다. 이 모듈은 Node.js에서 HTTP 서버를 생성하는 데 사용됩니다.
var http = require('http');

// fs 모듈을 불러옵니다. 이 모듈은 파일 시스템과 상호작용할 수 있게 해줍니다.
var fs = require('fs');

// HTTP 서버를 생성합니다. 서버가 요청(request)을 받으면 이 함수가 실행됩니다.
var app = http.createServer(function(request, response) {
    
    // 사용자가 요청한 URL을 가져옵니다.
    var url = request.url;
    
    // 사용자가 루트 URL (/)에 접근하면 /index.html로 리다이렉트합니다.
    if(request.url == '/') {
        url = '/index.html';
    }
    
    // favicon.ico에 대한 요청이 오면, 서버는 404 (Not Found) 상태 코드를 반환하고 처리 종료.
    if(request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    
    // 모든 정상적인 요청에 대해 200 (OK) 상태 코드를 반환합니다.
    response.writeHead(200);
    
    // 콘솔에 현재 파일의 절대 경로를 출력합니다.
    console.log(__dirname + url);
    
    // 사용자가 요청한 파일을 읽어들여 그 내용을 응답(response)으로 보냅니다.
    response.end(fs.readFileSync(__dirname + url));
});

// 서버가 3000번 포트에서 요청을 기다리도록 설정합니다.
app.listen(3000);