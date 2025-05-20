const OngoingProject = () => {
  return (
    <div className="flex flex-col mt-20">
      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-blue-950 flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          ONGOING PROJECTS
        </h1>
      </div>

      {/* Projects Section */}
      <div className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project 1 */}
          <div className="border-b border-gray-200 pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-blue-50 h-48 flex items-center justify-center rounded-lg">
                <span className="text-5xl">🩺</span>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Mobile Health Clinics
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Status
                    </p>
                    <p className="text-gray-700">Active in 12 regions</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Launch
                    </p>
                    <p className="text-gray-700">January 2023</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Bringing essential medical services to remote communities
                  through fully-equipped mobile units staffed by trained
                  professionals.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-b border-gray-200 pb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-blue-50 h-48 flex items-center justify-center rounded-lg">
                <span className="text-5xl">💉</span>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Child Immunization Drive
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Status
                    </p>
                    <p className="text-gray-700">Phase 2 underway</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Target
                    </p>
                    <p className="text-gray-700">50,000 children</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Comprehensive vaccination program covering 12 preventable
                  diseases across underserved urban and rural areas.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="pb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 bg-blue-50 h-48 flex items-center justify-center rounded-lg">
                <span className="text-5xl">👩‍⚕️</span>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Community Health Worker Training
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Status
                    </p>
                    <p className="text-gray-700">Ongoing batches</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-900">
                      Graduates
                    </p>
                    <p className="text-gray-700">240+ this year</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Six-month certification program equipping local community
                  members with essential diagnostic and primary care skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OngoingProject;
