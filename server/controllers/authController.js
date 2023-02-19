const User = require("../db/models/User");
const AuthenticationError = require("../errors/AuthenticationError");
const NotFoundError = require("../errors/NotFoundError");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) throw new AuthenticationError("Email not found");

	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) throw new AuthenticationError("Credentials are incorrect");
	res.status(200).json(user);
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	const user = await User.create(req.body);
	res.status(200).json(user);
};

module.exports = { loginUser, registerUser };
