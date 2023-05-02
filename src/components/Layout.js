import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const LoginWrapper = () => {
  return (
    <div className="min-h-[100vh] bg-[#000026] flex flex-col w-full">
      < Header />      
      <Outlet />
    </div>
  )
}

export default LoginWrapper
