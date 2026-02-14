import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Phone, Mail, Home, ArrowRight, ArrowLeft } from "lucide-react";

export default function BookingStep2() {
  const navigate = useNavigate();
  const location = useLocation();

  const { selectedDate, selectedTime } = location.state || {};

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!form.fullName || !form.email || !form.phone || !form.address) return;

    navigate("/booking/review", {
      state: {
        selectedDate,
        selectedTime,
        customer: form,
      },
    });
  };

  const handleBack = () => {
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <User className="text-blue-600" />
          Enter Your Details
        </h1>

        {/* Summary */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
          <p className="text-gray-700">
            <strong>Date:</strong> {selectedDate || "Not selected"}  
          </p>
          <p className="text-gray-700">
            <strong>Time:</strong> {selectedTime || "Not selected"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2">Full Name</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <User className="text-gray-500 mr-3" size={20} />
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">Email</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Mail className="text-gray-500 mr-3" size={20} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">Phone Number</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Phone className="text-gray-500 mr-3" size={20} />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="+1 555 123 4567"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-2">Service Address</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <Home className="text-gray-500 mr-3" size={20} />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                placeholder="123 Main St, Coppell, TX"
              />
            </div>
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
            onClick={handleNext}
            disabled={
              !form.fullName || !form.email || !form.phone || !form.address
            }
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              form.fullName &&
              form.email &&
              form.phone &&
              form.address
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

