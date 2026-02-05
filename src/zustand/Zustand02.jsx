import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore, { initialMember } from './store/useAuthStore';

const Zustand02 = () => {

  const {
    isLogin, currentMember, previousUrl,
    setIsLogin, setCurrentMember, setPreviousUrl
  } = useAuthStore();

  const login = () => {
    setIsLogin(true)
    setCurrentMember({
      memberEmail: "test123@gmail.com",
      memberPassword: "test123!@#",
      memberName: "홍길동"
    })
  }

  const logout = () => {
    setIsLogin(false)
    setCurrentMember(initialMember)
  }

  return (
    <div>
      <Link to={"/zustand/03"}>03번으로 이동</Link>
      <p>Zustand02</p>

      {/* 
        1. 로그인 처리 후 새로고침의 문제 해결
        2. 모든 페이지에서 데이터를 공유할 수 있는가
      */}
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Zustand02;