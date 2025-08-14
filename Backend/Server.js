const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/DataBase");
const authRoutes = require("./Routes/authentication");
dotenv.config();
connectDB(); // connect to MongoDB

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
