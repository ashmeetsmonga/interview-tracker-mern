import React from "react";
import { useGetAllJobs } from "../queryHooks/useGetAllJobs";
import Job from "./Job";
import { AiOutlinePlus } from "react-icons/ai";

const Jobs = () => {
	const { data, isLoading, error } = useGetAllJobs();

	return (
		<div className='w-full grid grid-cols-4 gap-8 p-16'>
			{data?.map((job) => (
				<Job key={job._id} data={job} />
			))}
			<button className='flex items-center justify-center'>
				<AiOutlinePlus className='w-16 h-16' />
			</button>
		</div>
	);
};

export default Jobs;
