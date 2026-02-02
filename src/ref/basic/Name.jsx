import React, { useRef } from 'react';

const Name = () => {
  // useRef() : DOM을 접근할 수 있게 제공해주는 훅함수
  const inputRef = useRef()
  let count = 0;
  let name = ""
  const handleButtonOnClick = () => {
    console.log(`${inputRef.current.value} / ${count}`)

    if (count < 1) {
      inputRef.current.value += "님"
      name = inputRef.current.value
    }else{
      return
    }
    count++;
    if (name !== inputRef.current.value){
      count = 0
      inputRef.current.value += "님"
    }
    // name = 
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonOnClick}>+님</button>
    </div>
  );
};


// 강사님 코드
// export default Name;


// import React, { useRef, useState } from 'react';

// const Name = () => {
//   // useRef(): DOM을 접근할 수 있게 제공해주는 훅함수
//   // "님" 한 번 만 붙이기
//   const [value, setValue] = useState("")
//   const [isClicked, setIsClicked] = useState(false);
//   const inputRef = useRef()
  
//   const handleValueOnChange = (e) => {
//     setValue(e.target.value)
//   }

//   const handleButtonOnClick = () => {
//     if(isClicked){ return; }
//     setValue(inputRef.current.value + "님")
//   }

//   return (
//     <div>
//       <h1>{value}</h1>
//       <input ref={inputRef} onChange={handleValueOnChange} value={value} type="text" />
//       <button onClick={handleButtonOnClick}>+님</button>
//     </div>
//   );
// };

// export default Name;