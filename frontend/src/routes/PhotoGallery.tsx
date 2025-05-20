import { useState } from "react";
import PhotoCard from "@/components/PhotoCard";

const data = [
  { image: "../collab.jpg", caption: "Image1" },
  { image: "../homepage2.jpeg", caption: "Image2" },
  { image: "../homepage2.jpeg", caption: "Image3" },
  { image: "../homepage1.jpeg", caption: "Image4" },
  { image: "../homepage1.jpeg", caption: "Image5" },
  { image: "../homepage1.jpeg", caption: "Image6" },
  { image: "../homepage1.jpeg", caption: "Image7" }, // Example 7th image
  { image: "../homepage1.jpeg", caption: "Image8" }, // Example 8th image
];

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / photosPerPage);

  // Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = data.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex flex-col mt-20">
        {/* Hero Section */}
        <div className="flex-row w-full h-40 md:h-70 bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url(../mountain.jpeg)]">
          <h1 className="text-2xl md:text-6xl font-bold text-white px-6 py-3 backdrop-blur-sm">
            Photo Gallery
          </h1>
        </div>

        {/* Photo Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center p-5">
          {currentPhotos.map((item, index) => (
            <PhotoCard image={item.image} key={index} caption={item.caption} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 my-6">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number}
                </button>
              )
            )}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
