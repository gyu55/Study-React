import React from 'react';

const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기
  // name={name} age={age} hobby={hobby} fontSize={fontSize} color={color}
  const style = {fontSize, color}
  return (
    <div style={style}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>취미: {hobby}</p>
      <p>폰트사이즈: {fontSize}</p>
      <p>폰트색상: {color}</p>
    </div>
  );
};

export default PropsComponent03;