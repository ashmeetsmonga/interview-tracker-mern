const User = require("../db/models/User");

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) {
		return res.status(400).json({ msg: "Password Incorrect" });
	}
	res.status(200).json(user);
};

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	const user = await User.create(req.body);
	res.status(200).json(user);
};

module.exports = { loginUser, registerUser };
