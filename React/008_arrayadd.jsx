import React, { useState } from 'react';

function NameList() {
  // 상태로 names 배열과 input 상태를 정의
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie']);
  const [input, setInput] = useState('');

  // 입력 필드의 값을 변경하는 함수
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 새로운 이름을 names 배열에 추가하는 함수
  const handleAdd = () => {
    if (input.trim() === '') return; // 빈 입력 무시
    setNames([...names, input]); // 새로운 이름을 배열에 추가
    setInput(''); // 입력 필드를 초기화
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <button onClick={handleAdd}>Add Name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;