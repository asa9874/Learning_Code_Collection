var http = require('http');
var fs = require('fs');
var url = require('url')

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;  // URL에서 쿼리 데이터를 파싱
    var pathname = url.parse(_url, true).pathname; // URL에서 pathname을 파싱
    let title = queryData.id;  // 쿼리 데이터에서 id를 가져옴
    let description;
    let linklist = `<ul>`;  // 링크 리스트를 HTML <ul>로 시작
    console.log(queryData);

    let Folder = './data';

    // data 폴더 내의 파일 목록을 읽어옴
    fs.readdir(Folder, function(error, filelist) {
        // filelist에 있는 파일명들을 링크로 추가
        for (var i = 0; i < filelist.length; i++) {
            linklist = linklist + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        }
        linklist += `</ul>`; // 링크 리스트 종료

        // pathname이 '/'일 경우
        if (pathname === '/') {
            fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, descriptions) {
                // descriptions가 undefined일 경우 기본값으로 대체
                if (descriptions === undefined) {
                    title = 'Welcome';
                    description = "hello";
                } else {
                    description = descriptions; // 파일에서 읽어온 내용을 description에 저장
                }

                // HTML 템플릿 생성
                var template = `
                <!doctype html>
                <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    ${linklist}
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
                </html>
                `;
                
                response.writeHead(200); // 성공 상태 코드 반환
                response.end(template); // 생성된 HTML을 클라이언트에 반환
            });
        } else {
            response.writeHead(404); // 404 상태 코드 반환
            response.end('Not found'); // 'Not found' 메시지 반환
        }
    });
});

app.listen(3000); // 서버를 3000 포트에서 실행