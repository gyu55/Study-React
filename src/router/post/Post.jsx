import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams(); // useParams().id 랑 같음 -> 객체여서 구조분해할당한 것
  // Main.jsx 에서 랜덤으로 설정한 id값을 가져옴
  console.log(id) // URI와 같은지 확인 완료

  // post 상태 -> 비동기코드 사용을 위한 상태 
  // 
  const [post, setPost] = useState("");
  // Link 태그를 누르면 1~100까지 랜덤한 숫자로 post로 이동
  // -> Math.floor(Math.random()) * 100 + 1 쓰기
  //       ex) /post/2
  //       ex) /post/31
  //       post 페이지는 랜덤한 숫자의 해당하는 데이터를
  //       jsonplace홀더에서 요청 후 화면에 id와 title만 h1태그로 출력(useEffect)
  

  // 
  useEffect(() => {
    const getPost = async () => { // 비동기 코드
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const datas = await response.json();
      return datas
    }
    getPost()
      .then((datas) => setPost(datas))  // fetch를 통해 가져온 값들을 setPost에 넣음
  }, []);
  // console.log(post) // setPost를 통해 값이 잘 전달되었는지 확인 + 그 안 값들을 어떻게 활용할 수 있을지 확인하기
  // console.log(post.title) // object 타입으로 출력되어, .id / .title로 접근가능한 거 확인
  return(
    <div>
      Post 컴포넌트
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
    </div>
  ) 
    
  
};

export default Post;



// 강사님 코드

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Post = () => {
//   const {id} = useParams()
//   const [post, setPost] = useState({})
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const getPost = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await response.json()
//     return post
//   }

//   getPost()
//     .then((post) => {
//       setIsLoading(false)
//       setPost(post)
//     })
//     .catch((err) => {
//       setIsLoading(true)
//       console.error(err)
//     })
//   }, [])

//   if(isLoading){
//     return <p>로딩중...</p>
//   }

//   return (
//     <div>
//       Post 컴포넌트!😎
//       <h1>{post.id}</h1>
//       <h1>{post.title}</h1>
//     </div>
//   );
// };

// export default Post;