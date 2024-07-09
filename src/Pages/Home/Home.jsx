import { CarouselDemo } from './../../components/ui/demo/CarouselDemo';
import { Slider } from '@/components/ui/demo/Slider';
import Moviewall from '@/components/MovieWall/Moviewall';

export default function Home() {
  return (
    <>
      <div className='px-4'>
        <CarouselDemo></CarouselDemo>
        <Slider></Slider>
        <Moviewall />
      </div>
    </>
  );
}
