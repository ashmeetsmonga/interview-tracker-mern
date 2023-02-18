require("dotenv").config();
require("./db/connectDB");
const express = require("express");
const authRouter = require("./routes/authRoute");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log("Server started on port :", PORT);
});
