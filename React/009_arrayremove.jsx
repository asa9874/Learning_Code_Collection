import React, { useState } from 'react';

function NameList() {
  // 상태로 names 배열과 input 상태를 정의
  const [names, setNames] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]);
  const [input, setInput] = useState('');

  // 입력 필드의 값을 변경하는 함수
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 새로운 이름을 names 배열에 추가하는 함수
  const handleAdd = () => {
    if (input.trim() === '') return; // 빈 입력 무시
    const newName = { id: names.length + 1, name: input }; // 새로운 이름 객체 생성
    setNames([...names, newName]); // 새로운 이름 객체를 배열에 추가
    setInput(''); // 입력 필드를 초기화
  };

  // 특정 항목을 제거하는 함수
  const handleRemove = (id) => {
    setNames(names.filter((name) => name.id !== id)); // id가 일치하지 않는 항목들로 새로운 배열 생성
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
        {names.map((person) => (
          <li key={person.id}>
            {person.name}
            <button onClick={() => handleRemove(person.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;