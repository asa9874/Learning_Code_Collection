import { useState, useEffect } from 'react';
import React from 'react';
// 화면 너비를 추적하는 커스텀 훅
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // 리사이즈 이벤트 핸들러
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열: 마운트와 언마운트 시 한 번만 실행

  // 상태 반환
  return windowWidth;
}

function App() {
  const width = useWindowWidth(); // 커스텀 훅 사용

  return (
    <div>
      <p>현재 화면 너비: {width}px</p>
    </div>
  );
}

export default App;