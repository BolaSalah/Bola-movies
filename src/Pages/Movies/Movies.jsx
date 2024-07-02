import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../index.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { IoStarSharp } from 'react-icons/io5';
import { IoIosEye } from 'react-icons/io';
import instance from '@/axiosConfig/instance';

export default function Movies() {
  const [counter, setCounter] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();
  const loader = useSelector((state) => state.loader.loader);

  useEffect(() => {
    instance.get("movie/popular", { params: { page: counter } }).then((res) => {
      setMoviesList(res.data.results)
    }).catch((err) => {
      console.log(err);
    })
  }, [counter])

  const modeState = useSelector((state) => state.mode.mode);
  // useEffect(() => {
  //   instance.get('/product', {
  //     // headers: { "Content-Type": "aplication/json" },
  //     // params: {
  //       // limit:10
  //     // }
  //   }).then((res) => {
  //     setPrd(res.data);
  //   }).catch((err) => 
  //     console.log(err);
  //   });
  // }, [])

  // useEffect(() => {
  //   (!bola) ? instance.get('movie/popular', { params: { page: counter } }).then((res) => setMoviesList(res.data.results))
  //     : instance.get('search/movie', { params: { page: counter, query: bola } }).then((res) => setMoviesList(res.data.results));
  // }, [counter, bola]);

// To next or prev page
  const toAnotherPage = (e) => {
    (e.target.value == "next") ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <>
      {loader ? (
        <div className='flex justify-center'>
          <div className=' flex justify-center mt-16'>
            <div className='flex flex-row flex-wrap justify-center w-full'>
              {Array.apply(null, { length: 8 }).map((e, i) => (
                <Stack className='sm:w-2/4 md:w-1/4 px-3 mb-10' key={i}>
                  <div className='w-11/12 bg-[#2f3856]'>
                    <Skeleton
                      variant='rectangular'
                      height={240}
                      className='xl:w-[300px] lg:w-[250px]'
                    />
                    <div className=' space-y-0 flex flex-col items-center'>
                      <Skeleton variant='text' width={150} className='h-7' />
                      <Skeleton variant='text' height={100} width={180} />
                    </div>
                  </div>
                </Stack>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='flex justify-center'>
          <div className='flex justify-center flex-col '>
            <div className='flex flex-row flex-wrap mt-16 '>
              {moviesList.map((movie) => (
                <div
                  className='sm:w-2/4 md:w-1/4 mb-10  px-3 text-white rounded-lg'
                  key={movie.id}
                >
                  <button
                    className='bg-[#2f3856] rounded-lg'
                    onClick={() => {
                      navigate(`/details/${movie.id}`);
                    }}
                  >
                    <CardActionArea>
                      <Typography
                        gutterBottom
                        component='div'
                        className='h-5 overflow-hidden text-white '
                      >
                        {movie.title}
                      </Typography>
                      <CardMedia
                        component='img'
                        height='140'
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        className='h-60 mt-3 '
                        alt='green iguana'
                      />
                      <CardContent>
                        <Typography
                          variant='body2'
                          className='h-16 overflow-hidden'
                        >
                          {movie.overview}
                        </Typography>
                      </CardContent>
                      <div className='flex justify-between p-3'>
                        <div className='flex justify-center items-center gap-2'>
                          <div>
                            <IoStarSharp className='text-[#ffff00]' />
                          </div>
                          <div>{String(movie.vote_average).slice(0, 3)}</div>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                          <div>
                            <IoIosEye />
                          </div>
                          <div>
                            <p>{movie.vote_count}</p>
                          </div>
                        </div>
                      </div>
                    </CardActionArea>
                  </button>
                </div>
              ))}
              <div className='mx-auto flex flex-row justify-center items-center mb-10 '>
                <button
                  className={`flex justify-center px-10 py-3 rounded-lg ${
                    modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
                  } 
                    ${counter == 1 ? ' cursor-not-allowed text-red-700' : ''}`}
                  value={'previous'}
                  onClick={(e) => {
                    toAnotherPage(e);
                    window.scroll({ top: 0 });
                  }}
                  disabled={counter == 1}
                >
                  prev
                </button>
                <div
                  className={`flex justify-center px-4 py-3 mx-5 rounded-lg ${
                    modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
                  } `}
                >
                  {counter}
                </div>
                <button
                  className={`flex justify-center px-10 py-3 rounded-lg text-white ${
                    modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
                  } `}
                  value={'next'}
                  onClick={(e) => {
                    toAnotherPage(e);
                    window.scroll({ top: 0, behavior: 'smooth' });
                  }}
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
