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

      <div className="flex flex-col gap-8 items-center justify-between p-3 w-screen text-sm/normal md:text-lg text-justify">
        <MVCard title="Health" backgroundImage="/collab.jpg">
          <p className="font-bitter">
            Our mission is to promote healthy and sustainable communities by
            strengthening collaborative relationships and supporting different
            initiatives for accomplishing its vision.
          </p>
        </MVCard>
        <MVCard
          title="Vision"
          backgroundImage="vision.jpg"
          reverse="flex-row-reverse"
        >
          <p className="font-bitter">
            Our vision is promoting communities for better health and prosperity
            that includes spiritual, emotional, physical, social and economic
            wellbeing.
          </p>
        </MVCard>
      </div>
    </div>
  );
};

export default ThematicAreas;
