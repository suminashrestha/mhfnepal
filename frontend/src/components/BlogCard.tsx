import ImageAnimationHorizontal from "./animations/ImageAnimationHorizontal";
import { Button } from "./ui/button";
import { SlCalender } from "react-icons/sl";
const BlogCard = ({
  image,
  title,
  description,
  date,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div className=" flex flex-col h-auto md:h-[500px] w-full p-2 md:p-4 gap-4 shadow-md bg-white rounded-md items-center text-black">
      <ImageAnimationHorizontal
        image={image}
        className="h-full w-full object-cover"
      />
      <h1 className="md:text-lg font-light text-left font-bitter">{title}</h1>
      <div className="flex gap-3 items-center self-end">
        <SlCalender />
        <span className="text-xs">{date}</span>
      </div>
      <p className="text-xs md:text-sm font-extralight">
        {description.slice(0,150).concat(".....")}
      </p>
      <Button className="w-auto bg-blue-950 hover:bg-blue-500 ease-in duration-200">Learn more</Button>
    </div>
  );
};

export default BlogCard;
