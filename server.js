require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routers/productRoutes");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/products", productRoutes);

// Database connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("MongoDB connection error:", err));

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
