import React from "react";
import { useGetAllJobs } from "../queryHooks/useGetAllJobs";
import Job from "./Job";

const Jobs = () => {
	const { data, isLoading, error } = useGetAllJobs();

	console.log(data);

	return (
		<div className='w-full grid grid-cols-4 gap-8 p-16'>
			{data?.map((job) => (
				<Job key={job._id} data={job} />
			))}
		</div>
	);
};

export default Jobs;
