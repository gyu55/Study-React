import React, { useState } from 'react';

const Person = () => {
  
  // 난수는 임의로 최대 600사이의 값으로 설정한다.
  // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린) 
  const [number, setNumber] = useState(0);
  const [style, setStyle] = useState({});

  const handleNumberOnClick = (e) => {
    let randomNum = Math.floor(Math.random() * 600)
    randomNum % 2 ? setStyle({color:"green"}) : setStyle({color:"pink"})
    setNumber(randomNum)
  }
  return (
    <div>
      <h1 style={style}>{number}</h1>
      <button onClick={handleNumberOnClick}>RandomNumber</button>
    </div>
  );
};

export default Person;


// import React, { useState } from 'react';

// const Person = () => {
  
//   // 난수는 임의로 최대 600사이의 값으로 설정한다.
//   // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
//   // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린) 
//   const [result, setResult] = useState("")
//   const [color, setColor] = useState("")
//   const getRandomNumber = () => {
//     return Math.floor((Math.random() * 600))
//   }
  
//   const handleResultOnClick = () => {
//     const getOddAndEven = getRandomNumber() % 2 ? "홀수" : "짝수";
//     setResult(getOddAndEven)
//     setColor(getOddAndEven === "홀수" ? "green" : "pink")
//   }

//   return (
//     <div>
//     <h1 style={{color}}>{result}</h1>
//     <button onClick={handleResultOnClick}>
//       랜덤 생성!
//     </button>    
//     </div>
//   );
// };

// export default Person;