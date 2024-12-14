const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// App Initialization
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/myDatabase", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.error("Error in connecting DB", e));

// Routes
app.get('/get-data', async (req, res) => {
  res.send('Hello world');
});

// Server Listening
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
