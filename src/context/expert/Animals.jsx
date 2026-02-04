import React, { useContext, useState } from "react";
import { AnimalsContext } from "./AnimalsContext";

const Animals = () => {
  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // -> 정보가 제공되어있는지 확인 (Provider)
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.

  // 1. Context에서 동물 가져오기
  const [value, setValue] = useState("");
  //const [button, setButton] = useState([]); // 버튼 배열 만들어서 입력받은 값 버튼 배열에 넣고
  // map으로 태그 만들기
  
  // 2. input에서 text 입력받을 준비
  // 객체니까 구조분해 할당해오기
  // animalContext.state.animals
  // animalContext.actions.insert
  // animalContext.actions.remove
  const { state, actions } = useContext(AnimalsContext);
  const { animals } = state;
  const { insert, remove } = actions;
  const handleAnimalOnChange = (e) => {
    // input에서 입력받은 값을 setValue에 넣기
    setValue(e.target.value);
  };
  // 3. 엔터를 입력하면 해당 text가 Context에서 가져온 동물 이름과 일치하는지 검사
  //    검사한 뒤 해당 값을 어디로? -> insert로
  //    insert로 어떤 값을 보냄? -> 버튼 만드는 거 -> 상태 바꿔야 함
  const makeAnimalButton = (e) => {
    if (e.key === "Enter") {
      // if (animals.includes(e.target.value)) {
        insert(value); // setButton = [...button, value]; 스프레드 써서 button배열에 
                       // 입력 받은 값 넣기
      // }
      // 엔터 누른 뒤 사용자 입력 칸 비우는 용
      setValue("");
      e.target.value = "";
    }
  };

  // 동물 삭제 버튼
  const removeAnimalButtonOnClick = (e) => {
    console.log("삭제")
    // 콘솔에 삭제 잘 나오고 -> 삭제 누른 버튼 정보를 불러올 수 있는지 확인
    // console.log(e.target.value) -> 이게 왜 공백 뜰까
    console.log(e.target.innerText) // innerText로 접근하니까 버튼 이름 잘 뜸
    remove(e.target.innerText)
  }

  const animalList = animals.map((animal, i) => (
    <button key={i} onClick={removeAnimalButtonOnClick}>{animal}</button> 
  ))

  // 4. 일치한다면 해당 동물 이름으로 버튼 추가 / 불일치 시 input필드를 비우면서 빈값 return

  return (
    <div>
      <input
        type="text"
        placeholder="동물을 입력하세요."
        onChange={handleAnimalOnChange}
        onKeyPress={makeAnimalButton}
      />
      {animalList}
    </div>
  );
};

export default Animals;
