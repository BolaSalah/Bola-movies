import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../../store/slices/language';
import { ThemeContenxt } from '../../contexts/theme';
import instance from '../../axiosConfig/instance';

import { CarouselDemo } from './../../components/ui/demo/CarouselDemo';
import { Slider } from '@/components/ui/demo/Slider';
import { InputDemo } from '@/components/ui/demo/InputDemo';
import { moviesAction } from '@/store/slices/movie';
import Moviewall from '@/components/MovieWall/Moviewall';

export default function Home() {
  // const dispatch = useDispatch();
  // const moviesLists = useSelector((state) => state.movies.movies)
  // useEffect(() => {
    // dispatch(moviesAction())
  // },[])
  
  // const {theme,setTheme} = useContext(ThemeContenxt);
  // return (
  //   <div className={`${(theme == "light")?"bg-white":"bg-black"}`}>
      
  //     {lang == 'en' ? (
  //       <>
  //         <div>Home</div>
  //         <div className='ms-8'>lang {lang}</div>
  //         <div className='ms-8'>
  //           <button
  //             onClick={() => {
  //               toggle();
  //             }}
  //             className='bg-blue-500 rounded-lg p-2'
  //           >
  //             chage
  //           </button>
  //         </div>
  //       </>
  //     ) : (
  //       <>
  //         <div>الصفحة الرئيسيه</div>
  //         <div className='ms-8'>اللغه العربيه</div>
  //         <div className='ms-8'>
  //           <button
  //             onClick={() => {
  //               toggle();
  //             }}
  //             className='bg-blue-500 rounded-lg p-2'
  //           >
  //             تعير اللغه
  //           </button>
  //         </div>
  //       </>
  //     ) }
      
  //     <div className='m-5 text-blue-600'>{ theme }</div>
  //     <button className='rounded-md bg-white p-4 ms-3 my-2' onClick={ () => {
  //       setTheme((theme == "light")?"dark":"light")
  //     }}>toggle</button>
  //   </div>
  // );
  return (
    <>
      <div className=''>
        <CarouselDemo></CarouselDemo>
        <Slider></Slider>
        <Moviewall />
      </div>
    </>
  );

}
