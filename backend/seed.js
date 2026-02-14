const mongoose = require("mongoose");
const Service = require("./models/Service");

mongoose
  .connect("mongodb://localhost:27017/dealguaranty")
  .then(async () => {
    console.log("Connected to MongoDB for seeding");

    await Service.deleteMany({});
    await Service.insertMany([
      { name: "Home Cleaning", price: 49 },
      { name: "AC Repair", price: 79 },
      { name: "Plumbing", price: 59 }
    ]);

    console.log("Seeded!");
    process.exit();
  })
  .catch(err => {
    console.error("Seeding error:", err);
    process.exit(1);
  });

