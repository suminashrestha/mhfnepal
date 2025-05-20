import React from "react";

const Videos = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="w-full h-40 md:h-60 bg-blue-950 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          VIDEOS
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center p-7 gap-6">
        <section className="bg-white rounded-lg shadow-md p-6 ">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.youtube.com/embed/LBRLXRGHTNU?start=0"
              title="Public Health Surveillance Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://www.youtube.com/embed/-85aGhgOOQ4?start=0"
              title="Die with a smile"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Videos;
