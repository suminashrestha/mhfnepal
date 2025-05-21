import DivAnimation from "@/components/animations/DivAnimation";
import ImageAnimationVertical from "@/components/animations/ImageAnimationVertical";
import HeadingTag from "@/components/HeadingTag";

const ThematicAreas = () => {
  return (
    <div>
      <ImageAnimationVertical
        image="/homepage-images/home-background.jpg"
        className="h-60 md:h-90 w-screen object-cover"
      />

      <DivAnimation className="font-bitter flex flex-col gap-5 h-50 justify-center border-b-1">
        <HeadingTag>Thematic Areas</HeadingTag>
      </DivAnimation>
    </div>
  );
};

export default ThematicAreas;
