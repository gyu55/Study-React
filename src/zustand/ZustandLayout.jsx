import React, { useEffect } from 'react';
import useAuthStore from './store/useAuthStore';
import { Outlet, useLocation } from 'react-router-dom';

const ZustandLayout = () => {
  // useAuthStore(state => state) // useAuthStore 전체를 가져올 거라면 생략가능
  const {
    isLogin, currentMember, previousUrl,
    setIsLogin, setCurrentMember, setPreviousUrl
  } = useAuthStore();
  
  // 주소
  // useLocation() // URL, URI를 알아옴
  const path = useLocation().pathname // URI 주소 가져오기
  useEffect(() => { // 경로가 바뀔 때마다 setPreviousUrl에 그 경로 넣음
    setPreviousUrl(path)
  }, [path])

  useAuthStore()
  return (
    <div>
      <h1>현재 경로: {previousUrl || "없음"}</h1>
      <h1>현재 유저: {currentMember.memberName || "없음"}</h1>
      <h1>로그인 상태: {isLogin ? "로그인" : "비로그인"}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ZustandLayout;

