const Stories = () => {
  return (
    <div className="flex flex-col mt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-blue-950 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          SUCCESS STORIES
        </h1>
      </div>

      {/* Stories Section */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Story 1 */}
          <div className="text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "The mobile clinic saved my child's life when we had no access to
              healthcare."
            </p>
            <p className="font-semibold text-blue-900">— Maria G., Patient</p>
          </div>

          {/* Story 2 */}
          <div className="text-center">
            <p className="text-lg italic text-gray-700 mb-4">
              "After the training program, I can now provide better care to my
              community."
            </p>
            <p className="font-semibold text-blue-900">
              — Dr. James K., Trainee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
