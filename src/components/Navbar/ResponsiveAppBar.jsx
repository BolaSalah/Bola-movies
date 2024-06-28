import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function ResponsiveAppBar() {
   const [show, setShow] = useState(false);

   const toggleShow = () => setShow(!show);
  return (
    <>
      <nav className='bg-blue-200 border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Bola
            </span>
          </a>
          <button
            onClick={toggleShow}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div
            className='w-full hidden md:block md:w-auto'
            style={{ display: show ? 'block' : '' }}
          >
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <NavLink
                  onClick={toggleShow}
                  aria-current='page'
                  style={({ isActive }) => {
                    return isActive ? { color: 'white' } : {};
                  }}
                  to={'/'}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleShow}
                  style={({ isActive }) => {
                    return isActive ? { color: 'white' } : {};
                  }}
                  to={'/favorite'}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleShow}
                  style={({ isActive }) => {
                    return isActive ? { color: 'white' } : {};
                  }}
                  to={'/movies'}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleShow}
                  style={({ isActive }) => {
                    return isActive ? { color: 'white' } : {};
                  }}
                  to={'/price'}
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  price
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
