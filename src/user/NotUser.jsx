import React, { useContext, useEffect } from "react";
import { RouteContext } from "../context/expert/RouteContext";
import { Navigate, useNavigate } from "react-router-dom";

// 다른 페이지로 이동.
const NotUser = () => {
  const { state, actions } = useContext(RouteContext);
  const { isLogin } = state;

  // 페이지 이동시키는 리액트의 훅함수
  // const navigate = useNavigate("경로");
  const navigate = useNavigate();

  // 방법 1. useNavigate() 사용
  // 함수의 콜백에서 사용할 경우 -> 함수에서 순서에 의해 실행할 거라면 
  // useEffect(() => {
  //   if (!isLogin) {
  //     navigate("/");
  //   }
  // }, []);


  // 방법 2. <Navigate /> 컴포넌트사용
  // 비회원인데 회원페이지에 접근하려고 할 때,
  // 즉 컴포넌트를 노출시키고 싶지 않을 때
  if (!isLogin) {
    return <Navigate to={"/"}/>;
  }

  return <div>회원 전용!</div>;
};

export default NotUser;
