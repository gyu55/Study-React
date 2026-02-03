import React, { useContext, useState } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildInputComponent = () => {
  // Context값 사용!
  // 폰트사이즈를 입력하고, 엔터를 누르면
  // 입력한 폰트 사이즈로 변경하기!
  const [value, setValue] = useState("")
  const {state, actions} = useContext(FontSizeContext)
  const {fontSize} = state
  const {setFontSize} = actions

  const handleFontSizeOnChange = (e) => {
    setValue(e.target.value)
  }
  
  const handleFontSizeOnKeyPress = (e) => {
    if(e.key === 'Enter'){
      setFontSize(value)
    }
  }

  return (
    <div>
      <p style={{fontSize}}>😎</p>
      <input type="text" 
        placeholder="폰트 사이즈를 입력하세요"
        onChange={handleFontSizeOnChange}
        onKeyPress={handleFontSizeOnKeyPress}
      />
    </div>
  );
};

export default ChildInputComponent;