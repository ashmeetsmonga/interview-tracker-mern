require("dotenv").config();
require("./db/connectDB");
require("express-async-errors");

const express = require("express");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const authRouter = require("./routes/authRoute");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

//errors middleware
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log("Server started on port :", PORT);
});
