import React from 'react'
import ResponsiveAppBar from './components/Navbar/ResponsiveAppBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './components/Footer/Footer';

export default function AppLayout() {
  const modeState = useSelector((state) => state.mode.mode);

  return (
    <div className={`${(modeState == "light") ?"bg-white ":"bg-black text-white"}`}>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </div>
  );
}
