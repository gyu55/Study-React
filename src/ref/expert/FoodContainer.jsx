import React, { useRef, useState } from "react";

const FoodContainer = () => {
  const korFoodRef = useRef("");
  const engFoodRef = useRef("");
  const foodNameRef = useRef([])
  const [foods, setFoods] = useState([]);

  const handleAddButtonOnClick = () => {
    const kor = korFoodRef.current.value;
    const eng = engFoodRef.current.value;
    setFoods([...foods, { kor, eng, isChecked: false}]);
    korFoodRef.current.value = "";
    engFoodRef.current.value = "";
  };

  const handleDeleteButtonClick = () => {
    setFoods(foods.filter((food) => !food.isChecked))
  };

  const handleCheckedButtonClick = (index) => {
    setFoods(foods.map((food, i) => {
      foods.map((food, i) =>
      i === index
        ? { ...food, isChecked: !food.isChecked }
        : food
    )
    }))
  }


  console.log(foods)
  const foodList = foods.map(({kor, eng, isChecked}, i) => (
    <li key={i} ref={(el) => foodNameRef.current[i] = el}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckedButtonClick}/>
      {kor} ({eng})
    </li>
  ))
  return (
    <div>
      <input type="text" placeholder="한국 음식 이름" ref={korFoodRef} />
      <input type="text" placeholder="영어 음식 이름" ref={engFoodRef} />
      <button onClick={handleAddButtonOnClick}>추가</button>
      <button onClick={handleDeleteButtonClick}>삭제</button>

      <ul>
        {foodList}
      </ul>
    </div>
  );
};

export default FoodContainer;



// import React, { useRef, useState } from 'react';

// // 코드를 완성시켜라! expert!
// const FoodContainer = () => {
  
//   const [foods, setFoods] = useState([])
//   const [checked, setChecked] = useState([])

//   const inputRef = useRef([])
//   const addFood = () => {
//     const kor = inputRef.current[0].value
//     const eng = inputRef.current[1].value
//     setFoods([...foods, {kor, eng}])
//     setChecked([...checked, false])
//   }

//   const handleCheckboxOnChange = (_, i) => {
//     setChecked(checked.map((check, idx) => (idx === i ? !check : check)))
//   }

//   const removeFoods = () => {
//     const newFood = foods.filter((_, i) => !checked[i])
//     setFoods(newFood)
//     setChecked(new Array(newFood.length).fill(false))
//   }

//   // 컴포넌트로 분리
//   const foodList = foods.map(({kor, eng}, i) => (
//     <li key={i}>
//       <input 
//         type="checkbox"
//         onChange={(e) => {handleCheckboxOnChange(e, i)}}
//       />
//       <span>{kor}({eng})</span>
//     </li>
//   ))

//   return (
//     <div>
//       <input type="text" 
//         placeholder='한국 음식 이름'
//         ref={(el) => { inputRef.current[0] = el}}
//       />
//       <input type="text" 
//         placeholder='영어 음식 이름'
//         ref={(el) => { inputRef.current[1] = el}}
//       />
//       <button onClick={addFood}>추가</button>
//       <button onClick={removeFoods}>삭제</button>
//       <ul>
//         {foodList}
//       </ul>
//     </div>
//   );
// };

// export default FoodContainer;