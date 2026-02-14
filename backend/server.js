console.log(">>> USING THIS server.js FROM /backend <<<");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const Service = require("./models/Service");
const Category = require("./models/Category");
const Provider = require("./models/Provider");
const Booking = require("./models/Booking");

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// ---------------------- SERVICES ----------------------

app.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.post("/services", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const newService = new Service({
      name,
      price,
      description: description || "",
      image: image || ""
    });

    const savedService = await newService.save();
    res.json(savedService);
  } catch (err) {
    res.status(500).json({ error: "Failed to create service" });
  }
});

// ---------------------- CATEGORIES ----------------------

app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { name, icon } = req.body;

    const newCategory = new Category({
      name,
      icon: icon || ""
    });

    const savedCategory = await newCategory.save();
    res.json(savedCategory);
  } catch (err) {
    res.status(500).json({ error: "Failed to create category" });
  }
});

// ---------------------- PROVIDERS ----------------------

app.get("/providers", async (req, res) => {
  try {
    const providers = await Provider.find().populate("serviceId");
    res.json(providers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch providers" });
  }
});

app.post("/providers", async (req, res) => {
  try {
    const { name, phone, email, serviceId, rating, experience } = req.body;

    const newProvider = new Provider({
      name,
      phone,
      email,
      serviceId,
      rating: rating || 5,
      experience: experience || 1
    });

    const savedProvider = await newProvider.save();
    res.json(savedProvider);
  } catch (err) {
    res.status(500).json({ error: "Failed to create provider" });
  }
});

// ---------------------- BOOKINGS ----------------------

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("serviceId")
      .populate("providerId");

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.post("/bookings", async (req, res) => {
  try {
    const { userName, userPhone, serviceId, providerId, date, time } = req.body;

    const newBooking = new Booking({
      userName,
      userPhone,
      serviceId,
      providerId,
      date,
      time
    });

    const savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// --------------------------------------------------------

const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);

