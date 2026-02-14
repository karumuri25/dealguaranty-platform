import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BookingStep1() {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleNext = () => {
    if (!selectedDate || !selectedTime) return;
    navigate("/booking/details", {
      state: { selectedDate, selectedTime },
    });
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Calendar className="text-blue-600" />
          Select Date & Time
        </h1>

        {/* Date Picker */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-2">Choose a Date</label>
          <input
            type="date"
            className="w-full border rounded-lg p-3 text-gray-700"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Time Slots */}
        <div className="mb-8">
          <label className="block text-lg font-semibold mb-3">Choose a Time Slot</label>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border text-center transition ${
                  selectedTime === time
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Clock size={16} className="inline-block mr-1" />
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
          className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
            selectedDate && selectedTime
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

