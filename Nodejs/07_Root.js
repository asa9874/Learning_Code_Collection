// HTTP, 파일 시스템, URL 모듈 로드
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성
var app = http.createServer(function(request, response) {
    var _url = request.url;                              // 요청 URL
    var queryData = url.parse(_url, true).query;         // 쿼리 파라미터 파싱
    var pathname = url.parse(_url, true).pathname;       // URL 경로 추출
    let title = queryData.id;                            // 쿼리에서 'id' 추출
    let description;                                     // 파일 내용 저장할 변수
    console.log(queryData);

    if (pathname === '/') {                              // 루트 경로 요청 시
        // 'data/타이틀' 파일을 읽어 내용 확인
        fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, descriptions) {
            if (descriptions === undefined) {            // 파일이 없거나 읽기 실패 시
                title = 'Welcome';                       // 기본 타이틀 설정
                description = "hello";                   // 기본 내용 설정
            } else {
                description = descriptions;              // 파일 내용 사용
            }

            // 동적으로 생성된 HTML 템플릿
            var template =`
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200);                      // 성공 응답 헤더
            response.end(template);                       // HTML 응답
        });
    } else {                                              // 다른 경로 요청 시
        response.writeHead(404);                          // 404 Not Found
        response.end('Not found');                        // 응답 내용
    }
});

// 서버를 3000번 포트에서 실행
app.listen(3000);