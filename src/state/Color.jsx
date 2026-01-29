import React, { useState } from 'react';

const Color = () => {
  // 사용자가 색상을 입력하고 버튼을 누르면 그 색상으로 글자색이 변경된다.
  // 핑크색을 입력하고 버튼을 누르면 핑크색
  // 파란색을 입력하고 버튼을 누르면 파란색
  // 빨간색을 입력하고 버튼을 누르면 검정색
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")

  const handleValueOnChange = (e) => {
    setValue(e.target.value)
  }
  const handleColorOnClick = () => {
    if(value === "핑크색"){
      setColor("pink")
    }
    if(value === "파란색"){
      setColor("blue")
    }
    if(value === "빨간색"){
      setColor("black")
    }
  }
  return (
    <div>
      <p style={{color}}>{value}</p>
      <input type="text" onChange={handleValueOnChange}/>
      <button onClick={handleColorOnClick}>색상 변경</button>
    </div>
  );
};

export default Color;



// import React, { useState } from 'react';

// const Color = () => {
//   // 상태관리 실습
//   // 사용자가 색상을 입력하고 버튼을 누르면 그 색상으로 글자색이 변경된다.
//   // 핑크색을 입력하고 버튼을 누르면 핑크색
//   // 파란색을 입력하고 버튼을 누르면 파란색
//   // 빨간색을 입력하고 버튼을 누르면 검정색
//   const [value, setValue] = useState("")
//   const [color, setColor] = useState("")
//   const colorMap = {
//     "핑크색": "pink",
//     "파란색": "blue",
//     "빨간색": "black"
//   }
  
//   const hangleValueOnChange = (e) => {
//     setValue(e.target.value)
//   }
  
//   const handleColorOnClick = () => {
//     setColor(colorMap[value])
//   }

//   return (
//     <div>
//       <p style={{color}}>{value}</p>
//       <input type="text" onChange={hangleValueOnChange} />
//       <button onClick={handleColorOnClick}>색상 변경</button>
//     </div>
//   );
// };

// export default Color;