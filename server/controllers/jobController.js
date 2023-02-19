const { StatusCodes } = require("http-status-codes");
const Job = require("../db/models/Job");
const BadRequestError = require("../errors/BadRequestError");

const getAllJobs = async (req, res) => {
	console.log(req.user);
	res.send("Get all jobs");
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
	res.send("Update jobs");
};

const deleteJob = async (req, res) => {
	res.send("Delete jobs");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
