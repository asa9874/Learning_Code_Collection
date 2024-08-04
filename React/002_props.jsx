import { useState } from 'react'
// 자식 컴포넌트
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// 부모 컴포넌트
function App() {
  return <Greeting name="Alice" />;
}

// 자식 컴포넌트
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

// 부모 컴포넌트
function App2() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <Button onClick={handleClick} label="Click Me" />;
}


export default App;
