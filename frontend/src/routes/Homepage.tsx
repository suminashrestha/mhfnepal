import { Card, CardContent } from "@/components/ui/card";
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
    <div className="bg-red-500 w-full h-auto">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="md:h-[600px] w-full bg-blue-400 flex justify-center"
        >
          <CarouselContent className="h-full w-full">
            {sliderImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full">
                  <img src={img} alt={`slider image ${index}`} className="h-full w-full md:object-cover object-contain"/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-10 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-4 z-10 top-1/2 -translate-y-1/2" />
        </Carousel>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque sequi ea officia ipsum repudiandae neque ut quidem nobis laboriosam minima adipisci, sit qui ratione, veniam quaerat, minus eum culpa. Debitis eaque enim, iusto in deserunt quisquam sed consequuntur autem unde? Quisquam, porro laboriosam temporibus illo aperiam aliquam earum saepe dolorum, pariatur facere culpa sint. Ratione cum laboriosam voluptate dolor ea quae iste nobis maxime et aliquam iure id temporibus nemo ullam, maiores exercitationem in provident. Velit enim deleniti eaque veritatis sed assumenda quia aut, reprehenderit a vitae ad esse soluta officia accusamus, nobis adipisci mollitia hic dolorem magni consequuntur. Iste ex architecto fuga necessitatibus eaque unde. Iste magnam inventore accusamus qui totam commodi voluptate eveniet ducimus. Deleniti impedit veritatis nesciunt reiciendis a dicta? Fugit voluptatem assumenda magnam praesentium ducimus distinctio accusantium odit pariatur, vel necessitatibus tempora architecto earum optio ipsum atque nostrum minus aut non possimus provident doloribus unde cum accusamus voluptatum! Vel numquam laborum illo blanditiis suscipit, itaque eaque, ipsa fuga ipsum maxime adipisci. Repudiandae nam incidunt, sit iste illum dolore! Eius ad accusantium aliquid officiis aut consectetur, nemo at distinctio eos ut? Cumque temporibus, labore voluptate nihil itaque laudantium quam! Reiciendis repudiandae fuga laboriosam enim minima eius, iusto quia accusantium ad quibusdam maxime quasi? Incidunt in recusandae iste tempore. Maxime obcaecati non alias consectetur a vitae soluta ipsum enim laborum! Voluptatibus, consectetur saepe vitae ex qui ipsum praesentium facilis aut. A eos iusto deleniti qui. In libero quasi recusandae rerum exercitationem! Quam obcaecati architecto deserunt est ipsum ut nemo nobis molestiae, dicta pariatur quisquam labore minima ducimus quasi doloremque, ab, assumenda sequi voluptate mollitia? Blanditiis eveniet ipsa reprehenderit harum libero. Saepe eaque cumque a tempora voluptas quaerat dicta cupiditate sed pariatur perspiciatis consequatur soluta reiciendis esse quidem aliquid praesentium, officia ullam nesciunt rem quia ipsam magni omnis sapiente! Suscipit repellat, eum similique vero numquam ea modi quos, quia beatae velit temporibus magni. Saepe distinctio repudiandae voluptate rem iste mollitia provident, ad minus? Totam eius quidem nisi, recusandae asperiores labore error dignissimos excepturi eligendi dolores sed odio ad dicta doloremque modi itaque tenetur ullam libero facilis sint? Excepturi ipsum vitae suscipit odit dolores qui nostrum natus non ratione aperiam libero a ex commodi delectus architecto, magni laborum! Consequuntur minus consequatur saepe ut adipisci dolor ipsa totam repellendus incidunt, soluta vel? Id deserunt iusto eaque est aperiam nam quisquam tempora ab quia aliquid. Id sunt modi deleniti quos laboriosam doloribus corrupti impedit aliquid alias illum illo sit, dolor nesciunt autem, labore unde blanditiis veritatis temporibus commodi a enim consequatur accusantium ullam. Doloribus similique porro esse, dolore nam autem rerum tempora, animi voluptatum est tempore eius libero. Voluptates, et repellendus amet illum velit eos, officia nulla sunt a, natus nisi consequuntur necessitatibus? Veritatis, exercitationem! Totam iusto dolore at sed, aspernatur soluta nesciunt rem numquam et cupiditate minus sint distinctio accusantium delectus cumque? Nam, hic ipsam unde sequi sit nesciunt dicta incidunt maiores omnis, porro sapiente aliquam facilis! Itaque, quia laboriosam? Totam at ipsum voluptas ipsam, enim natus nisi cupiditate molestias vero?
      </div>
    </div>
  );
};

export default Homepage;
