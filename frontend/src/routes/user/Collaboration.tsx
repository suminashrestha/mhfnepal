const Collaboration = () => {
  return (
    <div className="flex flex-col mt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-blue-950 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          COLLABORATIONS
        </h1>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Partner 1 */}
          <div className="border-b border-gray-200 pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-blue-50 h-48 flex items-center justify-center rounded-lg">
                <span className="text-5xl">🏥</span>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Global Health Initiative
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-900">Since</p>
                    <p className="text-gray-700">2018</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Focus Area
                    </p>
                    <p className="text-gray-700">Disease Prevention</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Joint program providing vaccination services and health
                  education in underserved regions across three countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
