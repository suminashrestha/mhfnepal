
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sliderImages = ["homepage1.jpeg", "homepage2.jpeg", "homepage3.jpeg"];
 

export const Crousel = () => {
  return (
    <div className="box-content w-full h-auto">
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        className="h-full w-full mx-0 px-0 "
      >
        <CarouselContent>
          {sliderImages.map((img, index) => (
            <CarouselItem key={index}>
              <div className="w-full h-full">
                <img
                  src={img}
                  alt={`slider image ${index}`}
                  className="h-full w-full object-cover "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-10 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-4 z-10 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
