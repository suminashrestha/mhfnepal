import DivAnimation from "@/components/animations/DivAnimation";
import ImageAnimationVertical from "@/components/animations/ImageAnimationVertical";
import HeadingTag from "@/components/HeadingTag";
import { useState } from "react";

const data = [
  { image: "../collab.jpg", caption: "Image1" },
  { image: "/mission.jpg", caption: "Image2" },
  { image: "/mission.jpg", caption: "Image3" },
  { image: "/banners/homepage-banner-1.jpg", caption: "Image4" },
  { image: "/banners/homepage-banner-1.jpg", caption: "Image5" },
  { image: "/banners/homepage-banner-1.jpg", caption: "Image6" },
  { image: "/banners/homepage-banner-1.jpg", caption: "Image7" }, // Example 7th image
  { image: "/banners/homepage-banner-1.jpg", caption: "Image8" }, // Example 8th image
];

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 7;

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
        <ImageAnimationVertical
          image="/banners/photos-banner.jpeg"
          className="h-60 md:h-90 w-screen object-cover"
        />

        <DivAnimation className="font-bitter flex flex-col gap-5 h-50 justify-center border-b-1">
          <HeadingTag>Photo Gallery</HeadingTag>
        </DivAnimation>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
          {currentPhotos.map((image) => (
            <div key={image.caption} className="mb-4 break-inside-avoid">
              <img
                src={image.image}
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
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
