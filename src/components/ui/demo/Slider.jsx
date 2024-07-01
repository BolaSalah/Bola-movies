import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { moviesAction } from '@/store/slices/movie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../../../axiosConfig/instance';
import { useNavigate } from 'react-router-dom';

export function Slider() {
  const [moviesList, setMoviesList] = useState([]);
  const [randomPage, setRandomPage] = useState(4);

  useEffect(() => {
    instance
      .get('movie/popular', { params: { page: randomPage, limit: 5 } })
      .then((res) => {
        setMoviesList(res.data.results.slice(0, 8));
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const navigate = useNavigate();

  const toDetails = (id) => {
    navigate(`/details/${id}`);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const modeState = useSelector((state) => state.mode.mode);


  return (
    <div className='flex justify-center flex-col py-10' id="WHAT'S-ON">
      <div className='flex justify-center'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-9/12'
        >
          <div className='flex ms-4 pb-4'>
            <div
              className={`w-3 rounded-md h-10 ${
                modeState == 'light' ? 'bg-[#3700b3]' : 'bg-[#00df9a]'
              }`}
            ></div>
            <div className='mb-5 ms-3  text-[25px] font-bold'>
              Fan favorites
            </div>
          </div>
          <CarouselContent>
            {moviesList.map((movie, index) => (
              <CarouselItem key={index} className='lg:basis-[20%] basis-[40%]'>
                <div>
                  <Card>
                    <CardContent className='flex items-center  '>
                      <img
                        className='hover:opacity-60 rounded-xl'
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        // src={`https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg`}
                        alt=''
                      />
                      <div
                        onClick={() => {
                          toDetails(movie.id);
                        }}
                        className='w-full h-full absolute flex justify-center items-center flex-col
                                 bg-black text-white transition duration-1000 
                                   opacity-0 hover:opacity-70 hover:cursor-pointer'
                      >
                        <p className=' text-xl border-b p-2 mr-8 mt-10 '>
                          more
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
