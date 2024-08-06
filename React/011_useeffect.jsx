import React, { useState, useEffect } from 'react';

function ButtonClickLogger() {
  const [count, setCount] = useState(0); // 상태 초기화

  useEffect(() => {
    // count 값이 변경될 때마다 실행됩니다.
    console.log(`버튼 클릭 횟수: ${count}`);
    
    // cleanup 함수는 컴포넌트가 언마운트되거나 다음 이펙트가 실행되기 전 호출됩니다.
    return () => {
      // 예를 들어, 이전 타이머 정리 등의 작업을 수행할 수 있습니다.
    };
  }, [count]); // count가 변경될 때마다 이펙트 실행

  return (
    <div>
      <p>버튼을 클릭한 횟수: {count}</p>
      <button onClick={() => setCount(count + 1)}>클릭하세요!</button> {/* 버튼 클릭 시 count 증가 */}
    </div>
  );
}

export default ButtonClickLogger;