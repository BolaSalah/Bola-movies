import React from 'react'
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AppLayout() {

  const lang = useSelector((state) => state.lang.lang)

  return (
    <div dir={`${lang == 'en' ? 'ltr' : 'rtl'}`} className=' bg-[#142144]'>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}
