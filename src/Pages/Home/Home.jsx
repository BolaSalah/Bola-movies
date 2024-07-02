import { CarouselDemo } from './../../components/ui/demo/CarouselDemo';
import { Slider } from '@/components/ui/demo/Slider';
import Moviewall from '@/components/MovieWall/Moviewall';
import LoaderHome from '@/components/LoaderHome/LoaderHome';

export default function Home() {
  return (
    <>
      <div>
        <LoaderHome />
        <CarouselDemo></CarouselDemo>
        <Slider></Slider>
        <Moviewall />
      </div>
    </>
  );
}
