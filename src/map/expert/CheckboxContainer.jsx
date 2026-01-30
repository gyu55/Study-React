import React, { useState } from 'react';

// 사용자가 클릭한 체크박스의 value를 화면에 출력
// 상용자가 체크박스를 해제하면 value도 화면에서 제거
// 단 화면에 출력하는 결과는 li태그의 리스트로 출력한다. (문자열 사용X)
// 완료 후 li태는 컴포넌트로 분리

const CheckboxContainer = () => {

  const languages = ["C", "Java", "JS"]
  const [selectedLanguages, setSelectedLanguages] = useState([])

  const handleLanguageOnChange = (e) => {
    const isCheck = e.target.checked
    const value = e.target.value
    if(isCheck){
      setSelectedLanguages([...selectedLanguages, value])
    }else{
      setSelectedLanguages(selectedLanguages.filter((language) => language !== value))
    }
  }

  console.log("selectedLanguages", selectedLanguages)
  const selectedList = selectedLanguages.map((language, i) => (
    <strong key={i} style={{marginRight: "8px"}}>{language}</strong>
  ))

  const languageList = languages.map((language, i) => (
    <li key={i}>
      <label>
        <input type="checkbox" value={language} onChange={handleLanguageOnChange}/>
        <span>{language}</span>
      </label>
    </li>
  ))

  return (
    <>
      <ul>
        {languageList}
      </ul>
      <div>
        <h1>결과</h1>
        <div>
          {selectedList}
        </div>
      </div>
    </>
  );
};

export default CheckboxContainer;