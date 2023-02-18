const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 20,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.checkPassword = async function (inputPassword) {
	const isPasswordCorrect = await bcrypt.compare(inputPassword, this.password);
	return isPasswordCorrect;
};

module.exports = mongoose.model("User", UserSchema);
