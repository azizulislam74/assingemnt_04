
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const CarouselPlugin = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem><img className="h-screen w-screen" src="/src/img/car1.jpg" alt="" /></CarouselItem>
          <CarouselItem><img className="h-screen w-screen" src="/src/img/car1.jpg" alt="" /></CarouselItem>
          <CarouselItem><img className="h-screen w-screen" src="/src/img/car1.jpg" alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselPlugin;
