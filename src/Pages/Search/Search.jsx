import instance from '@/axiosConfig/instance';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CardActionArea, CardContent, CardMedia, Skeleton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Search() {

    const [searchValue, setSearchValue] = useState("");
    const [movieList, setMovieList] = useState([]);
  const loader = useSelector((state) => state.loader.loader);
    const navigate = useNavigate()
    const movieName = (e)=> {
        setSearchValue(e.target.value)
    }
      useEffect(() => {
        instance
          .get('search/movie',{params:{query:searchValue}})
          .then((res) => {
            setMovieList(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [searchValue]);

    return (
      <div>
        <div className='ps-4'>
          <input
            type='text'
            value={searchValue}
            className='my-20 text-blue-900 bg-red-200'
            onChange={(e) => {
              movieName(e);
            }}
          />
          <div className='flex flex-row flex-wrap'>
            {loader ? (
            <div className='flex justify-center'>
              <div className='max-w-[1800px] flex justify-center mt-6'>
                <div className='flex flex-row flex-wrap justify-center w-full'>
                  {Array.apply(null, { length: 8 }).map((e, i) => (
                    <Stack className='sm:w-2/4 md:w-1/4 px-3 mb-10' key={i}>
                      <div className='w-11/12'>
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
              movieList.map((movie) => (
                <div
                  className='sm:w-2/4 md:w-1/4 mb-10 px-3 text-white'
                  key={movie.id}
                >
                  <button
                    className='bg-[#2f3856]'
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
                      <CardContent className='mb-5'>
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
                  
              )
            )
        )
    }
                  { (searchValue.length > 1 && movieList.length == 0 ) &&
               <div>nooooooooo</div>
               }
               
              </div>
        </div>
      </div>
    );
}
