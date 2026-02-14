import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, Clock, User, Home, Mail, Phone, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function BookingStep3() {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedDate, selectedTime, customer } = location.state || {};

  const handleBack = () => {
    navigate("/booking/details", {
      state: { selectedDate, selectedTime, customer },
    });
  };

  const handleConfirm = () => {
    navigate("/booking/success", {
      state: { selectedDate, selectedTime, customer },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle className="text-green-600" />
          Review & Confirm
        </h1>

        {/* Booking Summary */}
        <div className="space-y-6">

          {/* Date & Time */}
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Appointment</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <Calendar className="text-blue-600" size={20} />
                <strong>Date:</strong> {selectedDate}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="text-blue-600" size={20} />
                <strong>Time:</strong> {selectedTime}
              </p>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Your Details</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <User className="text-gray-600" size={20} />
                <strong>Name:</strong> {customer?.fullName}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="text-gray-600" size={20} />
                <strong>Email:</strong> {customer?.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="text-gray-600" size={20} />
                <strong>Phone:</strong> {customer?.phone}
              </p>
              <p className="flex items-center gap-2">
                <Home className="text-gray-600" size={20} />
                <strong>Address:</strong> {customer?.address}
              </p>
            </div>
          </div>

          {/* Service Summary */}
          <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Service Summary</h2>
            <p className="text-gray-700">
              <strong>Service:</strong> Home Deep Cleaning
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> $149 (Flat Rate)
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> 3–4 hours
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-10">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-semibold"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            onClick={handleConfirm}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition font-semibold"
          >
            Confirm Booking
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

