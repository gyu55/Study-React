import React, { useState } from 'react';

const Count = () => {
  // 흑함수 - use...
  // useState(초기값)
  const [number, setNumber] = useState(0)

  const decrease = () => {
    // number -= 1         // 값을 변경할 때 virtual DOM은 직접 접근하지마라
    setNumber(number - 1)
  }
  const increase = () => {
    setNumber(number + 1)
  }
  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;