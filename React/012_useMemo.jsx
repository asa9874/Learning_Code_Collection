import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ number }) {
  // 복잡한 계산을 수행하는 함수
  const computeExpensiveValue = (num) => {
    console.log('복잡한 계산 중...');
    // 계산에 시간이 걸리는 작업
    return num * 2;
  };

  // useMemo를 사용하여 계산된 값을 메모이제이션합니다.
  const expensiveValue = useMemo(() => computeExpensiveValue(number), [number]);

  return <div>계산된 값: {expensiveValue}</div>;
}

function App() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(false); // 다른 상태

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>숫자 증가</button>
      <button onClick={() => setOtherState(!otherState)}>다른 상태 변경</button>
      <ExpensiveComponent number={number} />
    </div>
  );
}

export default App;