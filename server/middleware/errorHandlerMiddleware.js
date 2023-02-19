const CustomError = require("../errors/CustomError");

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomError) {
		res.status(err.statusCode).json({ msg: err.message });
	}
};

module.exports = errorHandlerMiddleware;
