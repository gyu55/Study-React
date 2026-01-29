
export default function Jsx02(){
  const name = "홍길동"
  const age = 20

  return (
    // 리액트 프래그먼트 <></> 처럼 DOM 트리를 감싸기 위한 용도
    // 태그가 아니라 자바스크립트 문자 써야 되면 {}로 묶기
    <>
      <p>이름: {name}</p>       
      <p>나이: {age}</p>
    </>
  )
}