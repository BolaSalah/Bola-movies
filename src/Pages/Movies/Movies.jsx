import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../index.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';
import { IoIosEye } from 'react-icons/io';
import instance from '@/axiosConfig/instance';

export default function Movies() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const loader = useSelector((state) => state.loader.loader);
  const modeState = useSelector((state) => state.mode.mode);

  // get movies
  const getMovies = async () => {
    await instance
      .get('movie/popular', { params: { page: counter } })
      .then((res) => {
        setMoviesList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, [counter]);

  // To next or prev page
  const toAnotherPage = (e) => {
    e.target.value == 'next'
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  return (
    <>
      {loader ? (
        <div className='flex justify-center items-center w-full h-[85vh]'>
          <CircularProgress />
        </div>
      ) : (
        <div className='flex justify-center'>
          <div className='flex justify-center flex-col '>
            <div className='flex flex-row flex-wrap mt-16 '>
              {moviesList.map((movie) => (
                <div
                  className='sm:w-2/4 md:w-1/4 mb-10 px-12 sm:px-3 text-white rounded-lg'
                  key={movie.id}
                >
                  <button
                    // className='bg-[#2f3856] rounded-lg'
                    className={` px-2 py-2 rounded-lg ${
                      modeState == 'light' ? 'bg-[#5f33c2] hover:bg-[#3700b3]' : 'bg-[#00df9a] text-black'
                    } `}
                    onClick={() => {
                      navigate(`/details/${movie.id}`),
                        window.scroll({ top: 0 });
                    }}
                  >
                    <CardActionArea>
                      <div
                        gutterBottom
                        component='div'
                        className='h-6 overflow-hidden font-bold '
                      >
                        {movie.title}
                      </div>
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
                  className={`flex justify-center px-10 py-3 rounded-lg  ${
                    modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
                  } 
                    ${counter == 1 ? ' cursor-not-allowed text-black' : 'text-white'}`}
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
                  className={`flex justify-center px-4 py-3 mx-5 rounded-lg text-white ${
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
