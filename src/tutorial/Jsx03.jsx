const Jsx03 = () => {   // 화살표 함수는 export 앞에 못 붙임
  // 이름, 나이, 만나이
  const name = "홍길동"
  const age = 20

  // JSX: {} 내부에서는 JS의 문법을 사용할 수 있음 -> JS의 문법을 사용하기 위한 템플릿
  return(
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>만나이: {age - 1}</p>
    </>
  ) 
  
}

export default Jsx03;