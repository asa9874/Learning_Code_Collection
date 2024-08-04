import React, { useRef } from 'react';

function FocusInput() {
  // useRef 훅을 사용하여 ref 객체 생성
  const inputRef = useRef(null);

  // 버튼 클릭 시 입력 필드에 포커스를 맞추는 함수
  const focusInput = () => {
    inputRef.current.focus(); // ref를 통해 DOM 요소에 접근하고 focus() 메서드 호출
  };

  return (
    <div>
      <input ref={inputRef} placeholder="여기에 포커스 맞추기" />
      <button onClick={focusInput}>포커스 맞추기</button>
    </div>
  );
}

export default FocusInput;