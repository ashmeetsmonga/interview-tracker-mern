import React from "react";
import { useGetAllJobs } from "../queryHooks/useGetAllJobs";
import Job from "./Job";

const Jobs = () => {
	const { data, isLoading, error } = useGetAllJobs();

	console.log(data);

	return (
		<div className='w-full h-full p-[10rem] flex gap-8 flex-wrap items-start'>
			{data?.map((job) => (
				<Job key={job._id} data={job} />
			))}
		</div>
	);
};

export default Jobs;
