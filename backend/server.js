const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const applyRoutes = require("./routes/applyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/apply", applyRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});