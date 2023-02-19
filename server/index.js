require("dotenv").config();
require("./db/connectDB");
require("express-async-errors");

const express = require("express");
const authMiddleware = require("./middleware/authMiddleware");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");
const authRouter = require("./routes/authRoute");
const jobRouter = require("./routes/jobRoute");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/job", authMiddleware, jobRouter);

//errors middleware
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log("Server started on port :", PORT);
});
