import React from "react";

const Job = ({ data }) => {
	return (
		<div className='w-1/4 bg-gray-50 flex flex-col gap-4'>
			<div>Company: {data.company}</div>
			<div>Position: {data.position}</div>
			<div>Status: {data.status}</div>
		</div>
	);
};

export default Job;
