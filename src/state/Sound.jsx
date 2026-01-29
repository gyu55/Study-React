import React, {useState}from 'react';

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

const Sound = () => {
  const [animal, animalSound] = useState("")
  const dogSound = "멍멍"
  const catSound = "야옹"
  const dog = () =>{
    animalSound(dogSound)
  }
  const cat = () =>{
    animalSound(catSound)
  }

  return (
    <div>
      <button onClick={dog}>강아지울음소리</button>
      <h1>{animal}</h1>
      <button onClick={cat}>고양이울음소리</button>
    </div>
  );
};

export default Sound;