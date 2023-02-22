import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Job = ({ data }) => {
	return (
		<div className='bg-gray-50 flex flex-col gap-2 rounded-sm shadow-2xl'>
			<div
				className={`${
					data.status.toLowerCase() === "cleared" ? "bg-green-800" : "bg-gray-800"
				} text-gray-100 w-full flex justify-between items-center font-semibold rounded-t-sm text-2xl tracking-widest p-4`}
			>
				<div>{data.company}</div>
				<div>
					<AiFillDelete />
				</div>
			</div>
			<div className='flex flex-col gap-2 p-4'>
				<div className='text-xl tracking-wider'>
					<span className='font-extralight'>Position: </span>
					<span className='font-semibold'>{data.position}</span>
				</div>
				<div className='text-xl tracking-wider'>
					<span className='font-extralight'>Status: </span>{" "}
					<span className='font-semibold'>{data.status}</span>
				</div>
			</div>
		</div>
	);
};

export default Job;
