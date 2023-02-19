const mongoose = require("mongoose");

const JobSchema = mongoose.Schema(
	{
		company: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
