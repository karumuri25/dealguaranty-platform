import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Calendar, Clock, User, Home, ArrowRight } from "lucide-react";

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedDate, selectedTime, customer } = location.state || {};

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="max-w-xl w-full bg-white p-10 rounded-2xl shadow-xl text-center">

        {/* Success Icon */}
        <CheckCircle className="text-green-600 mx-auto mb-4" size={70} />

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">Booking Confirmed!</h1>
        <p className="text-gray-700 mb-8">
          Your service has been successfully scheduled.  
          A confirmation email has been sent to you.
        </p>

        {/* Summary Card */}
        <div className="bg-gray-100 border border-gray-300 p-6 rounded-xl text-left space-y-4 mb-8">

          <div className="flex items-center gap-3">
            <Calendar className="text-blue-600" size={22} />
            <p className="text-gray-800">
              <strong>Date:</strong> {selectedDate}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={22} />
            <p className="text-gray-800">
              <strong>Time:</strong> {selectedTime}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-gray-700" size={22} />
            <p className="text-gray-800">
              <strong>Name:</strong> {customer?.fullName}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Home className="text-gray-700" size={22} />
            <p className="text-gray-800">
              <strong>Address:</strong> {customer?.address}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleGoHome}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition"
        >
          Go to Homepage
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

