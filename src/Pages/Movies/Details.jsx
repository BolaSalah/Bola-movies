import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import instance from '../../axiosConfig/instance';
import { useDispatch, useSelector } from 'react-redux';
import { moviesAction } from '@/store/slices/movie';

export default function Details() {
  const { id } = useParams();
  // const movie = useLoaderData();
  const [movie, setMovie] = useState([]);
  const loader = useSelector((state) => state.loader.loader);

  // const movie = useSelector((state) => state.movies.movies);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(moviesAction({id:id}))
  },[])

  useEffect(() => {
    instance
      .get(`movie/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=' pt-1'>
      {loader ? (
        <Stack>
          <div className='flex justify-center'>
            <div className='max-w-[1300px] flex justify-center mt-6'>
              <div>
                <Skeleton variant='rectangular' width={350} height={450} />
              </div>
              <div className='ms-12 w-3/4'>
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem' }}
                  width={200}
                />
                <Skeleton variant='text' sx={{ fontSize: '6rem' }} />
                <Skeleton
                  variant='text'
                  sx={{ fontSize: '2rem' }}
                  width={200}
                />
              </div>
            </div>
          </div>
        </Stack>
      ) : (
        <div className='flex justify-center'>
          <div className='max-w-[1300px] flex justify-center flex-cols mt-12 flex-wrap pt-4  '>
            <div className='flex flex-col items-center sm:w-[600px] w-9/12 mx-2'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className=' lg:h-[400px] h-[300px] w-full'
              />
              <div className='text-3xl font-bold rounded-md text-black bg-white  p-3 my-4'>
                {movie.title}
              </div>
            </div>
            <div className='items-center flex justify-center sm:w-[600px] w-9/12'>
              <div className='text-lg text-red-500 font-medium my-4 mx-auto '>
                {movie.overview}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// export const loader = (arg) => {
//   return instance
//     .get(`/products/${arg.params.id}`)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
