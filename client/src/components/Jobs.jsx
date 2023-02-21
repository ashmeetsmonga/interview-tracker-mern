import React from "react";
import { useGetAllJobs } from "../queryHooks/useGetAllJobs";

const Jobs = () => {
	const { data, isLoading, error } = useGetAllJobs();

	console.log(data);

	return <div className='w-full h-full flex gap-4 flex-wrap'>{data?.map((job) => 0)}</div>;
};

export default Jobs;
