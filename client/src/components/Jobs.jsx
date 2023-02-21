import React from "react";
import { useGetAllJobs } from "../queryHooks/useGetAllJobs";
import Job from "./Job";

const Jobs = () => {
	const { data, isLoading, error } = useGetAllJobs();

	console.log(data);

	return (
		<div className='w-full h-full flex gap-4 flex-wrap'>
			{data?.map((job) => (
				<Job key={job._id} data={job} />
			))}
		</div>
	);
};

export default Jobs;
