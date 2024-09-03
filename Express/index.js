// express 모듈 가져오기
const express = require('express');
const app = express();
const fs = require('fs');
const template = require('./lib/template.js');
// 포트 설정
const port = 3000;

// 기본 라우트 설정
app.get('/', (request, response) => {
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    );
    response.end(html);
  });
});

app.get('/page/:pageId', (request, response) => {
  response.send(request.params)
});


// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 