import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sliderImages = ["homepage1.jpeg", "homepage2.jpeg", "homepage3.jpeg"];

const Homepage = () => {
  return (
    <div className=" flex flex-col items-center mt-20 bg-red-500">
      <div className="box-border w-full h-auto">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="h-auto w-full mx-0 px-0"
        >
          <CarouselContent className="h-full w-full">
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
    </div>
  );
};

export default Homepage;
