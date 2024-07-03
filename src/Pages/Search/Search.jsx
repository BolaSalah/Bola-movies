import instance from '@/axiosConfig/instance';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoSearch } from 'react-icons/io5';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [movieList, setMovieList] = useState([]);
  const loader = useSelector((state) => state.loader.loader);
  const navigate = useNavigate();

  // set search value
  const movieName = (e) => {
    setSearchValue(e.target.value);
  };

  // get movie by search
  const getMovieSearch = async () => {
    await instance
      .get('search/movie', { params: { query: searchValue } })
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getMovieSearch();
  }, [searchValue]);

  return (
    <div>
      <div className='ps-4 mb-11'>
        <div className='flex justify-center mb-9 '>
          <div className='relative w-[60%] mb-1'>
            <input
              type='text'
              value={searchValue}
              maxLength={40}
              placeholder='Find Movies'
              className=' w-full px-3 my-10 text-blue-900 py-2 border-2 border-blue-800 outline-[#00df9a]  '
              onChange={(e) => {
                movieName(e);
              }}
            />
            <div className='absolute top-0 right-2 my-10 py-2 text-2xl text-black'>
              <IoSearch />
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap'>
          {loader ? (
            searchValue.length == 0 ? (
              <div></div>
            ) : (
              <div className='flex justify-center'>
                <div className='max-w-[1800px] flex justify-center mt-6'>
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
                            <Skeleton
                              variant='text'
                              width={150}
                              className='h-7'
                            />
                            <Skeleton variant='text' height={100} width={180} />
                          </div>
                        </div>
                      </Stack>
                    ))}
                  </div>
                </div>
              </div>
            )
          ) : (
            movieList.map((movie) => (
              <div
                className='sm:w-2/4 md:w-1/4 mb-10 sm:px-3 px-10  text-white'
                key={movie.id}
              >
                <button
                  className='bg-[#2f3856] rounded-lg'
                  onClick={() => {
                    navigate(`/details/${movie.id}`);
                  }}
                >
                  <CardActionArea>
                    <div
                      gutterBottom
                      component='div'
                      className='h-5 overflow-hidden text-white mt-1 '
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
                  </CardActionArea>
                </button>
              </div>
            ))
          )}
          {searchValue.length > 1 && movieList.length == 0 && (
            <div className=' w-full md:text-[32px] sm:text-lg text-[10px] flex-wrap mt-3 my-12 flex flex-col justify-center items-center'>
              <span className='text-red-700'>
                There is no movie with this name :{' '}
              </span>
              <span>({searchValue})</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
