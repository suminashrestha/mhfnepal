import { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState(500);
  const [method, setMethod] = useState("esewa");

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Support Our Mission
            </h1>
            <p className="text-gray-600 mt-2">
              Your donation helps us continue our important work
            </p>
          </div>

          {/* Donation Amount */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-3">
              Select Amount (NPR)
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {[200, 500, 1000, 2000].map((value) => (
                <button
                  key={value}
                  onClick={() => setAmount(value)}
                  className={`py-2 rounded-lg ${
                    amount === value
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
            <div className="mt-4 relative">
              <span className="absolute left-3 top-3 text-gray-500">NPR</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-3">
              Payment Method: You can pay through Esewa
            </h2>
            <div className="space-y-3">
              {/* eSewa Option */}
              <div
                onClick={() => setMethod("esewa")}
                className={`p-4 border rounded-lg cursor-pointer ${
                  method === "esewa"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      method === "esewa"
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {method === "esewa" && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <img
                    src="https://esewa.com.np/common/images/esewa_logo.png"
                    alt="eSewa"
                    className="h-6"
                  />
                </div>
              </div>

              {/* Other Payment Options */}
            </div>
          </div>

          {/* Donor Info */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-3">
              Your Information
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-800 text-white font-medium rounded-lg shadow">
            {method === "esewa"
              ? "Continue to eSewa Payment"
              : "Donate NPR " + amount}
          </button>

          {/* Security Note */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            Your payment information is processed securely. We don't store any
            payment details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
