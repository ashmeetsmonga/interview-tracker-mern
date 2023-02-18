const express = require("express");
const authRouter = require("./routes/authRoute");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
