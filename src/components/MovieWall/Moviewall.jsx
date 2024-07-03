import instance from '@/axiosConfig/instance';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Moviewall() {
  const navigate = useNavigate();
  const [movieOnMovieWall, setMovieOnMovieWall] = useState([]);
  const modeState = useSelector((state) => state.mode.mode);

  // get movie
  const getmovie = async () => {
    await instance
      .get('movie/popular', { params: { page: 5 } })
      .then((res) => {
        setMovieOnMovieWall(res.data.results.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getmovie();
  }, []);

  // to details of movie
  const toDetails = (id) => {
    navigate(`/details/${id}`);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='flex justify-center flex-col py-6'>
      <div className='flex justify-center'>
        <div className='w-9/12'>
          <div className='flex ms-2'>
            <div
              className={`w-3 rounded-md h-10 ${
                modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
              }`}
            ></div>
            <div className='mb-5 ms-3  text-[25px] font-bold'>WHAT'S ON</div>
          </div>
          <div className='grid px-5 py-4 w-10/12 mx-auto'>
            {movieOnMovieWall.map((movie, _index) => (
              <>
                {_index == 0 && (
                  <div
                    key={_index}
                    className=' w-full col-start-1 col-span-2 row-start-1 row-span-2 relative'
                  >
                    <img
                      className='w-full'
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=''
                    />
                    <div
                      onClick={() => {
                        toDetails(movie.id);
                      }}
                      className='absolute top-0 w-full h-full opacity-0 hover:opacity-70
                                      bg-black text-white 
                                      flex justify-center items-center flex-col
                                       hover:cursor-pointer transition duration-1000'
                    >
                      <p className='md:text-xl text-[12px]'>{movie.title}</p>
                      <p className='p-5 md:block hidden'>{movie.overview}</p>
                      <p className='md:text-2xl text-[12px] border-b p-1'>
                        more
                      </p>
                    </div>
                  </div>
                )}

                {_index > 0 && _index < 9 && (
                  <div key={_index} className=' bg-red-500 relative '>
                    <img
                      className='w-full'
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=''
                    />
                    <div
                      onClick={() => {
                        toDetails(movie.id);
                      }}
                      className='absolute top-0 w-full h-full opacity-0 hover:opacity-70
                                      bg-black text-white 
                                      flex justify-center items-center flex-col
                                       hover:cursor-pointer transition duration-1000'
                    >
                      <p className={`md:text-xl text-[12px] p-1`}>
                        {movie.title}
                      </p>
                      <p className='md:text-2xl text-[12px] border-b p-1'>
                        more
                      </p>
                    </div>
                  </div>
                )}
                {_index == 9 && (
                  <div
                    key={_index}
                    className=' bg-red-500 row-start-3 row-span-2 col-start-3 col-span-2 relative'
                  >
                    <img
                      className='w-full'
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=''
                    />
                    <div
                      onClick={() => {
                        toDetails(movie.id);
                      }}
                      className='absolute top-0 w-full h-full opacity-0 hover:opacity-70
                                    
                                      bg-black text-white 
                                      flex justify-center items-center flex-col
                                       hover:cursor-pointer transition duration-1000'
                    >
                      <p className='md:text-xl text-[12px]'>{movie.title}</p>
                      <p className='p-5 md:block hidden'>
                        {movie.overview.slice(0, 110)}
                      </p>
                      <p className='md:text-2xl text-[12px] border-b p-1'>
                        more
                      </p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div
            className='flex justify-center my-6 hover:cursor-pointer '
            onClick={() => {
              navigate('movies'), window.scroll({ top: 0 });
            }}
          >
            <p
              className={`flex justify-center px-10 py-3 rounded-lg ${
                modeState == 'light'
                  ? 'bg-[#3700b3] hover:text-white'
                  : 'bg-[#00df9a] hover:text-black'
              } `}
            >
              More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
