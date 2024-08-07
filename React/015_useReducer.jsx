import React, { useReducer } from 'react';

// 상태와 액션을 처리하는 리듀서 함수
// 이 함수는 현재 상태와 액션을 받아서 새로운 상태를 반환합니다.
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // 'INCREMENT' 액션을 처리하여 count를 1 증가시킵니다.
      return { count: state.count + 1 };
    case 'DECREMENT':
      // 'DECREMENT' 액션을 처리하여 count를 1 감소시킵니다.
      return { count: state.count - 1 };
    case 'RESET':
      // 'RESET' 액션을 처리하여 count를 0으로 리셋합니다.
      return { count: 0 };
    default:
      // 정의되지 않은 액션 타입이 들어왔을 때 에러를 던집니다.
      throw new Error('Unknown action type');
  }
};

function Counter() {
  // useReducer를 사용하여 상태와 디스패치 함수 설정
  // reducer: 상태 업데이트를 위한 함수
  // { count: 0 }: 상태의 초기값
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>카운트: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>리셋</button>
    </div>
  );
}

export default Counter;