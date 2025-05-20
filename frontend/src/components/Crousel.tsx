
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sliderImages = ["home1.jpg", "home2.jpg", "home3.jpg"];

export const Crousel = () => {
  return (
    <div className="box-cover w-full h-auto]">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="h-full w-full mx-0 px-0 "
      >
        <CarouselContent>
          {sliderImages.map((img, index) => (
            <CarouselItem key={index}>
              <img
                src={img}
                className="h-full w-full object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 z-10 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-4 z-10 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
