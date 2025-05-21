import { motion, useScroll } from "motion/react";
import { useRef } from "react";

const MVCard = ({
  title,
  children,
  backgroundImage,
  reverse,
}: {
  title: string;
  children: React.ReactNode;
  backgroundImage: string;
  reverse: string;
}) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0 1", "0 0.25"],
  });

  return (
    <div
      className={`flex flex-col justify-center items-center lg:${reverse} w-screen `}
    >
      <motion.div
        ref={element}
        style={{
          scale: scrollYProgress,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex flex-col text-white w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full shadow-md gap-2 justify-center p-4 "
      >
        <h1 className="text-5xl text-center font-bitter font-light">{title}</h1>
        {/* <p className="text-sm md:text-lg p-7 text-center">{children}</p> */}
      </motion.div>
      <div className="w-1/2 h-auto">
        <p className="text-sm md:text-lg p-7 text-center">{children}</p>
      </div>
    </div>
  );
};

export default MVCard;
