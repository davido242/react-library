import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LoginWrapper = () => {
  return (
    <div className="min-h-[100vh] bg-[#000026] flex flex-col w-full">
      <Header />      
      <Outlet />
      <Footer />
    </div>
  )
}

export default LoginWrapper
