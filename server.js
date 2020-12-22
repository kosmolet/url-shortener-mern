const express = require("express");
require("dotenv").config();
const { PORT, MONGO_URI } = process.env;
const mongoose = require("mongoose");

const app = express();

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT || 5055, () =>
      console.log(`Server is running on ${PORT}...`)
    );
  } catch (err) {
    console.log("Server Error", err.message);
    process.exit((code: 1));
  }
};

start();
