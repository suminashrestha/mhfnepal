import BlogCard from "@/components/BlogCard";
import { Crousel } from "@/components/Crousel";

const data = [
  {
    title: "The cause for sumina is somash manandhar",
    image: "homepage1.jpeg",
    description:
      "Lorem ipsum doluptatem! Qe! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
  },
  {
    title: "sumina",
    image: "homepage2.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
  },
  {
    title: "sumina",
    image: "homepage2.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
  },
  {
    title: "sumina",
    image: "homepage1.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
  },
  {
    title: "sumina",
    image: "homepage1.jpeg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias illum earum voluptatem! Quod iure vero culpa enim ipsa ratione similique! Excepturi fugit similique autem, magnam ut rem blanditiis eos natus. Minima, exercitationem soluta ducimus voluptatibus odio saepe? Labore, ad praesentium?",
  },
];
const Homepage = () => {
  return (
    <div className=" flex flex-col items-center mt-20 gap-6 text-blue-950 bg-stone-100">
      <Crousel />
      

      {/* mission */}
      <p className="py-16 px-5 md:px-6 text-xl lg:text-3xl text-center border-b-2 text-gray-600 font-play">
          " We aim in promoting Healthy Practices, People and Places "
      </p>


      {/* objective */}

      <div className="h-screen">

      </div>

      {/* blogs */}
      <div className=" flex flex-col gap-6">
        <h2 className="font-bold text-lg md:text-2xl text-center border-b-1 p-3">Recent blogs</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 items-center p-5">
          {data.map((item, index) => (
            <BlogCard
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
