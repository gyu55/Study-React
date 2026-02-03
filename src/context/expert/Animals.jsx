import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.


  // 1. Context에서 동물 가져오기
  const [value, setValue] = useState("")
  const {state, actions} = useContext(AnimalsContext);
  const {animals} = state
  const {insert} = actions
  // 2. input에서 text 입력받을 준비
  const handleAnimalOnChange = (e) => {
    // input에서 입력받은 값을 setValue에 넣기
    setValue(e.target.value)
  }
  // 3. 엔터를 입력하면 해당 text가 Context에서 가져온 동물 이름과 일치하는지 검사
  //    검사한 뒤 해당 값을 어디로? -> insert로 
  const makeAnimalButton = (e) => {
    if(e.key === 'Enter'){
      console.log(insert(value))
    }
  }
  // 4. 일치한다면 해당 동물 이름으로 버튼 추가 / 불일치 시 input필드를 비우면서 빈값 return

  return (
    <div>
      <input type="text"
        placeholder='동물을 입력하세요.'
        onChange={handleAnimalOnChange}
        onKeyPress={makeAnimalButton}
      />
    </div>
  );
};

export default Animals;