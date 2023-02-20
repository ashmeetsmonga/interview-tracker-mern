const { StatusCodes } = require("http-status-codes");
const Job = require("../db/models/Job");
const BadRequestError = require("../errors/BadRequestError");

const getAllJobs = async (req, res) => {
	const jobs = await Job.find({ createdBy: req.user.userId });
	res.status(StatusCodes.OK).json(jobs);
};

const getJob = async (req, res) => {
	res.send("Get a jobs");
};

const createJob = async (req, res) => {
	const { company, position, status } = req.body;

	if (!company || !position || !status)
		throw new BadRequestError("Provide Company, position and status");

	const job = await Job.create({ ...req.body, createdBy: req.user.userId });
	res.status(StatusCodes.OK).json(job);
};

const updateJob = async (req, res) => {
	const { company, position, status } = req.body;

	if (!company || !position || !status)
		throw new BadRequestError("Provide Company, position and status");

	const { jobId } = req.params;
	const job = await Job.findOneAndUpdate({ _id: jobId, createdBy: req.user.userId }, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(StatusCodes.OK).json(job);
};

const deleteJob = async (req, res) => {
	res.send("Delete jobs");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
