const CaseStudies = () => {
  return (
    <div className="flex flex-col mt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-blue-950 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          CASE STUDIES
        </h1>
      </div>

      {/* Studies Section */}
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Case Study 1 */}
          <div className="border-b border-gray-200 pb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Rural Vaccination Program
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">85%</p>
                <p className="text-gray-700">Coverage Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">120+</p>
                <p className="text-gray-700">Villages Reached</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">0</p>
                <p className="text-gray-700">Disease Outbreaks</p>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Our mobile vaccination teams immunized children across remote
              mountain communities, achieving herd immunity against preventable
              diseases.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="border-b border-gray-200 pb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Maternal Health Initiative
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">40%</p>
                <p className="text-gray-700">Mortality Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">500+</p>
                <p className="text-gray-700">Mothers Trained</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">24/7</p>
                <p className="text-gray-700">Emergency Care</p>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Established birthing centers with trained midwives reduced
              pregnancy complications in regions with no previous healthcare
              access.
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="pb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Clean Water Project
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">100%</p>
                <p className="text-gray-700">Villages Covered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">75%</p>
                <p className="text-gray-700">Disease Reduction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-900">10K+</p>
                <p className="text-gray-700">People Served</p>
              </div>
            </div>
            <p className="text-gray-700 text-center">
              Installed water purification systems eliminated waterborne
              illnesses in communities previously dependent on contaminated
              sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
