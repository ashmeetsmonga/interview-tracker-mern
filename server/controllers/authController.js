const loginUser = (req, res) => {
	res.json({ msg: "Login Successful" });
};

const registerUser = (req, res) => {
	res.json({ msg: "Register Successful" });
};

module.exports = { loginUser, registerUser };
