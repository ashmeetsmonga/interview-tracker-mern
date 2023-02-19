const { StatusCodes } = require("http-status-codes");
const Job = require("../db/models/Job");

const getAllJobs = async (req, res) => {
	console.log(req.user);
	res.send("Get all jobs");
};

const getJob = async (req, res) => {
	res.send("Get a jobs");
};

const createJob = async (req, res) => {
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
