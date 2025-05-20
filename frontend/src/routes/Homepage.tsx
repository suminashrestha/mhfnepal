import HeadingAnimation from "@/components/animations/HeadingAnimation";
import ImageAnimationHorizontal from "@/components/animations/ImageAnimationHorizontal";
import BlogCard from "@/components/BlogCard";
import { Crousel } from "@/components/Crousel";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
const data = [
  {
    title: "MHN Project in Mountain Region: Some elaboration by Jens Huylebroeck",
    image: "home2.jpg",
    description:
      "Lorem ipsum doluptatem! Qe! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
    date: "2021-03-21"
  },
  {
    title: "Our experiences working within a remote community of the Everest Region – Lifechanging!",
    image: "home3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
    date: "2021-03-21"

  },
  {
    title: "An indelible health camp in Himalaya – Joshua McCowen",
    image: "home2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
    date: "2021-03-21"

  },
];
const Homepage = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0 1", "0 0.25"],
  });

  return (
    <div className=" flex flex-col items-center mt-20 gap-8 text-blue-950 bg-stone-100">

      <Crousel />

      {/* mission */}
      <motion.div
        ref={element}
        style={{ scale: scrollYProgress }}
        className="py-16 px-5 md:px-6 text-xl lg:text-3xl text-center border-b-2 text-gray-600 font-bitter font-light "
      >
        <p>"Building healthier community together."</p>
      </motion.div>
      <div className="relative h-screen w-screen bg-[url('grandmother-baby.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
        <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center px-10 text-white">
          <motion.div
            className="h-auto w-auto "
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
          >
            <h1 className=" text-3xl md:text-4xl font-light mb-4 font-bitter text-center border-l-2">
              Mahabir Health Foundation (MHF)
            </h1>
            <p className="text-sm md:text-lg text-justify">
              Mahabir Health Foundations was established with the aim of
              Building a Healthier Community through the provision of health
              services at the doorstep of community. It strives for changing the
              health-service seeking behaviour of target community that leads
              them early prevention and reduction in the cost of treatment.
              Further, we promote healthy and sustainable communities by
              providing health & social counseling, health camps, medicine
              distribution, awareness of hygiene maintain, sanitation, mental
              health development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* objective */}
      <div className="w-full h-auto lg:h-screen flex flex-col lg:flex-row p-1 gap-5 items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 flex-col justify-center h-full flex items-center px-5 gap-3">
         <HeadingAnimation>Our Objectives</HeadingAnimation>
          <ul className="list-disc p-5 text-xs/normal md:text-lg/normal">
            <li>To promote health, education and employment</li>
            <li>
              To establish Integrated Health Academy tailored with Community
              Hospital for health service promotion
            </li>
            <li>To build a national network for Health promotion</li>
            <li>
              To publish and broadcast different health and income promotion
              materials
            </li>
            <li>
              To work for rescue, reconstruction and rehabilitation programs for
              disaster victims
            </li>
            <li>To promote the old age health and life-style management</li>
            <li>To organise mental health improvement programme</li>
            <li>
              To conduct R&D on different disease and share the information with
              community to help live the life without disease.
            </li>
            <li>
              To promote yoga, meditation and life style improvement programs
            </li>
            <li>
              To establish a rehabilitation and care home for deprived people
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full">
          <ImageAnimationHorizontal
            image="grandmother-baby.jpg"
            className="w-full h-full hidden lg:block object-cover rounded-md shadow-md"
          />
        </div>
      </div>

      {/* blogs */}
      <div className=" flex flex-col gap-6 justify-center">
       <HeadingAnimation>Recent Blogs</HeadingAnimation>

        <div className="flex flex-col md:grid md:grid-cols-3  gap-4 items-center p-5">
          {data.map((item, index) => (
            <BlogCard
              title={item.title}
              description={item.description}
              image={item.image}
              date={item.date}
              key={index}
            />
          ))}
        </div>
        <div />
      </div>
    </div>
  );
};

export default Homepage;
