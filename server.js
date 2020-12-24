const express = require("express");
require("dotenv").config();
const { PORT, MONGO_URI } = process.env;
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/link", require("./routes/link"));
app.use("/stn", require("./routes/shortlink"));

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
    process.exit(1);
  }
};

start();
