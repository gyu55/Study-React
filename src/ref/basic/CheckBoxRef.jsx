import React, { useRef, useState } from 'react';

const CheckBoxRef = () => {

  const languages = ["C", "Java", "JS"]
  const [hobbies, setHobbies] = useState("")

  const inputRef = useRef([])
  const languageList = languages.map((language, i) => (
    <li key={i}>
      <label>
        <input type="checkbox" value={language} ref={(el) => {inputRef.current[i] = el}} />
        <span>{language}</span>
      </label>
    </li>
  ))

  const handleButtonOnClick = () => {
    // [input, input, input]
    // 1. 체크를 어떻게 검사 해야하는가?
    // if ~ else, .filter(), 삼항
    // [input, input]
    // 2. 두 개의 input에서 내가 필요한 값이 뭔가?
    // input -> value
    // [] -> map
    // 3. ["Java", "C", "JS"] -> "Java, C, JS"
    // [] -> "" .join()
    const hobby = inputRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(", ")

    setHobbies(hobby)
  }

  return (
    <>
      <ul>
        {languageList}
      </ul>
      <div>
        <h1>결과</h1>
        {hobbies}
        <button onClick={handleButtonOnClick}>취미 확인하기!😎</button>
      </div>
    </>
  );
};

export default CheckBoxRef;