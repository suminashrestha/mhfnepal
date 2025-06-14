import DivAnimation from "@/components/animations/DivAnimation";
import ImageAnimationVertical from "@/components/animations/ImageAnimationVertical";
import HeadingTag from "@/components/HeadingTag";
import MVCard from "@/components/MVCard";

const ThematicAreas = () => {
  return (
    <div className="mt-20 w-screen h-auto">
      <ImageAnimationVertical
        image="/homepage-images/home-background.jpg"
        className="h-60 md:h-90 w-screen object-cover"
      />

      <DivAnimation className="font-bitter flex flex-col gap-5 h-50 justify-center border-b-1">
        <HeadingTag>Thematic Areas</HeadingTag>
      </DivAnimation>

      <div className="flex flex-col gap-12 items-center justify-between py-8 w-screen text-sm/normal md:text-lg text-justify">

        <MVCard title="Health" backgroundImage="/thematic-areas-images/health.jpg">
          <p className="font-bitter">
           We promote accessible healthcare and awareness to improve the well-being of communities through medical support, health camps, and education on hygiene and nutrition.
          </p>
        </MVCard>

        <MVCard
          title="Education"
          backgroundImage="/thematic-areas-images/education.jpg"
          reverse="flex-row-reverse"
        >
          <p className="font-bitter">
            Our focus is on empowering individuals through quality education, skill development, and inclusive learning opportunities, especially for underserved groups.
          </p>
        </MVCard>

         <MVCard
          title="Employment"
          backgroundImage="/thematic-areas-images/employment.jpg"
        >
          <p className="font-bitter">
            We work to create job opportunities through vocational training, entrepreneurship support, and career guidance, aiming to reduce poverty and boost economic independence.
          </p>
        </MVCard>

         <MVCard
          title="Environment"
          backgroundImage="/thematic-areas-images/environment.jpg"
        >
          <p className="font-bitter">
            We are committed to environmental protection through awareness programs, tree plantation, clean-up drives, and climate action to build a greener future.
          </p>
        </MVCard>

         <MVCard
          title="Agriculture"
          backgroundImage="/thematic-areas-images/agriculture.jpg"
        >
          <p className="font-bitter">
            We support sustainable agricultural practices, training, and innovation to help farmers increase productivity, ensure food security, and protect the environment.
          </p>
        </MVCard>
      </div>
    </div>
  );
};

export default ThematicAreas;
