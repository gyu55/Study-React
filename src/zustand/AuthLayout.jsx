import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';

const AuthLayout = () => {

  const {
    isLogin, previousUrl,
  } = useAuthStore();

  if(!isLogin) return <Navigate to={"/"} replace={true} /> // replace={true} 이동한 후에 뒤로가기를 눌러도 이 페이지는 건너뛰고 이전 페이지로

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;