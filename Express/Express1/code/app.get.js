// Express 모듈을 가져옵니다.
const express = require('express');

// Express 애플리케이션 객체를 생성합니다.
const app = express();

// 루트 경로('/')에 대한 GET 요청을 처리합니다.
// 사용자가 'http://localhost:3000/'에 접속하면 실행됩니다.
app.get('/', (req, res) => {
  // 클라이언트에게 'Hello, World!'라는 문자열을 응답으로 보냅니다.
  res.send('Hello, World!');
});

// '/about' 경로에 대한 GET 요청을 처리합니다.
// 사용자가 'http://localhost:3000/about'에 접속하면 실행됩니다.
app.get('/about', (req, res) => {
  // 클라이언트에게 'About Page'라는 문자열을 응답으로 보냅니다.
  res.send('About Page');
});

// 서버를 3000번 포트에서 실행합니다.
// 서버가 시작되면 콘솔에 메시지를 출력합니다.
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});