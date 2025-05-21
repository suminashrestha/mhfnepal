import DivAnimation from "@/components/animations/DivAnimation";
import ImageAnimationVertical from "@/components/animations/ImageAnimationVertical";
import HeadingTag from "@/components/HeadingTag";

const Accomplishment = () => {
  return (
    <div className="flex flex-col mt-20">
      <ImageAnimationVertical
        image="/banners/accomplishment-banner.png"
        className="h-60 md:h-90 w-screen object-cover"
      />

      <DivAnimation className="font-bitter flex flex-col gap-5 h-50 justify-center border-b-1">
        <HeadingTag>Our Accomplishments</HeadingTag>
      </DivAnimation>

      {/* Stats Section */}
      <div className="bg-white py-12 px-4 md:px-8 flex  w-full justify-center ">
        <div className="max-w-6xl mx-auto font-bitter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Stat 1 */}
            <div className="bg-blue-50 p-4  rounded-lg text-center h-[300px] w-[300px] flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-blue-900">126</p>
              <p className="text-blue-800">Health Camps conducted</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-blue-50 p-4 rounded-lg text-center h-[300px] w-[300px] flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-blue-900">11</p>
              <p className="text-blue-800">School Health awareness Programs</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-blue-50 p-4 rounded-lg text-center h-[300px] w-[300px] flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-blue-900 ">10+</p>
              <p className="text-blue-800">Blood donation campaigns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-blue-50 py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
            Healthcare Milestones
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Organized blood donation camps
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Distributed relief materials along with medicine to flood
                  victims
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Conducted 126 health camps and health awareness campaign{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishment;
