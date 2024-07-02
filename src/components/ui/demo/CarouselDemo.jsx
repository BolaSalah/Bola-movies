import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { useEffect, useState } from 'react';
import instance from '../../../axiosConfig/instance';

export function CarouselDemo() {
  const [moviesList, setMoviesList] = useState([]);
  const [randomPage, setRandomPage] = useState(Math.ceil(Math.random() * 40));

  useEffect(() => {
    instance
      .get('movie/popular', { params: { page: randomPage } })
      .then((res) => {
        setMoviesList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [randomPage]);

  return (
    <div className='flex justify-center items-center  '>
      <Carousel className='w-12/12 mx-2  overflow-hidden '>
        <CarouselContent>
          {moviesList.map((movie, index) => (
            <CarouselItem key={index}>
              <div className=''>
                <Card className='border-0'>
                  <CardContent className='flex justify-center items-center'>
                    <img
                      className='md:h-[90vh] h-[40vh]  mx-auto w-full '
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      // src={`https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg`}
                      alt='home'
                    />
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
  );
}
