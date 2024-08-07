import React, { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log('ChildComponent 렌더링');
  return <button onClick={onClick}>클릭하세요</button>;
}

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // useCallback을 사용하여 함수 메모이제이션
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // 빈 배열: 이 함수는 한 번만 생성됩니다.

  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <button onClick={() => setOtherState(!otherState)}>다른 상태 변경</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default App;