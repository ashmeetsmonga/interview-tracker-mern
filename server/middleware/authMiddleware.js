const AuthenticationError = require("../errors/AuthenticationError");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
	const authHeaders = req.headers.authorization;
	if (!authHeaders || !authHeaders.startsWith("Bearer"))
		throw new AuthenticationError("Invalid credentials");

	const token = authHeaders.split(" ")[1];
	try {
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decodedToken;
		next();
	} catch (err) {
		throw new AuthenticationError(err.message);
	}
};

module.exports = authMiddleware;
