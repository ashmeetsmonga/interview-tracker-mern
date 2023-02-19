const getAllJobs = async (req, res) => {
	res.send("Get all jobs");
};

const getJob = async (req, res) => {
	res.send("Get a jobs");
};

const createJob = async (req, res) => {
	res.send("Create job");
};

const updateJob = async (req, res) => {
	res.send("Update jobs");
};

const deleteJob = async (req, res) => {
	res.send("Delete jobs");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
