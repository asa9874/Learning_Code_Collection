import React from 'react';

function NameList() {
  const names = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  return (
    <ul>
      {names.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default NameList;