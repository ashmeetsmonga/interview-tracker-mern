const { StatusCodes } = require("http-status-codes");
const User = require("../db/models/User");
const AuthenticationError = require("../errors/AuthenticationError");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) throw new AuthenticationError("Email not found");

	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) throw new AuthenticationError("Credentials are incorrect");

	const token = user.createJWT();

	res.status(StatusCodes.OK).json({ name: user.name, token });
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	const user = await User.create(req.body);

	const token = user.createJWT();

	res.status(StatusCodes.OK).json({ name, token });
};

module.exports = { loginUser, registerUser };
