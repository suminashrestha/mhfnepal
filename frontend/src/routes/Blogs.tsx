import { useState } from "react";
import BlogCard from "@/components/BlogCard";

const data = [
  {
    title: "The children's education",
    image: "../homepage1.jpeg",
    description:
      "Supporting children's education in rural Nepal through sustainable programs and community engagement.",
    date: "May 15, 2023",
  },
  {
    title: "Healthcare Initiatives in Remote Areas",
    image: "../homepage2.jpeg",
    description:
      "How our mobile clinics are bringing essential medical services to mountainous regions.",
    date: "April 2, 2023",
  },
  {
    title: "Annual Scholarship Program Results",
    image: "../homepage2.jpeg",
    description:
      "Celebrating 120 students who received educational support this academic year.",
    date: "March 18, 2023",
  },
  {
    title: "Clean Water Project Update",
    image: "../homepage1.jpeg",
    description:
      "New water purification systems installed in 5 villages, serving 2,000+ residents.",
    date: "February 5, 2023",
  },
  {
    title: "Volunteer Spotlight: Local Heroes",
    image: "../homepage1.jpeg",
    description:
      "Recognizing the community members making a difference in their neighborhoods.",
    date: "January 12, 2023",
  },
  // Adding more items to demonstrate pagination
  {
    title: "New School Building Inauguration",
    image: "../homepage1.jpeg",
    description:
      "Opening of our 5th school building in the remote Himalayan region.",
    date: "December 10, 2022",
  },
  {
    title: "Winter Clothing Drive Success",
    image: "../homepage2.jpeg",
    description:
      "Distributed 500+ winter kits to children in high-altitude villages.",
    date: "November 5, 2022",
  },
  {
    title: "Medical Camp Results",
    image: "../homepage2.jpeg",
    description:
      "Over 1,200 patients treated during our quarterly health camp.",
    date: "October 15, 2022",
  },
  {
    title: "Teacher Training Program",
    image: "../homepage1.jpeg",
    description: "Certified 45 local teachers in modern pedagogical methods.",
    date: "September 3, 2022",
  },
  {
    title: "Summer Nutrition Program",
    image: "../homepage1.jpeg",
    description: "Provided daily meals to 300+ children during summer break.",
    date: "August 20, 2022",
  },
  {
    title: "Library Project Completion",
    image: "../homepage2.jpeg",
    description: "Established 3 new community libraries with 5,000+ books.",
    date: "July 8, 2022",
  },
  {
    title: "Annual Fundraiser Results",
    image: "../homepage1.jpeg",
    description: "Raised $250,000 for our education initiatives this year.",
    date: "June 1, 2022",
  },
  {
    title: "Library Project Completion",
    image: "../homepage2.jpeg",
    description: "Established 3 new community libraries with 5,000+ books.",
    date: "July 8, 2022",
  },
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(data.length / blogsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col mt-20">
      {/* Hero Banner */}
      <div className="w-full h-60 md:h-80 bg-blue-950 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            BLOGS & STORIES
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Insights and updates from our foundation's work
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((item, index) => (
            <BlogCard
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-blue-50 text-blue-900 disabled:opacity-50 hover:bg-blue-100 transition-colors"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded-md ${
                    currentPage === number
                      ? "bg-blue-900 text-white"
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  } transition-colors`}
                >
                  {number}
                </button>
              )
            )}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-blue-50 text-blue-900 disabled:opacity-50 hover:bg-blue-100 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
