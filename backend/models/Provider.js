const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  rating: { type: Number, default: 5 },
  experience: { type: Number, default: 1 }
});

module.exports = mongoose.model("Provider", ProviderSchema);

