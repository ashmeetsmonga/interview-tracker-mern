const User = require("../db/models/User");

const loginUser = async (req, res) => {
	res.json({ msg: "Login Successful" });
};

const registerUser = async (req, res) => {
	const user = await User.create(req.body);
	res.status(200).json(user);
};

module.exports = { loginUser, registerUser };
