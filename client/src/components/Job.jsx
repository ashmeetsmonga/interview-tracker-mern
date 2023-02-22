import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDeleteJob } from "../queryHooks/useDeleteJob";

const Job = ({ data }) => {
	const navigate = useNavigate();
	const { mutate: deleteJobMutation } = useDeleteJob();
	const { _id: jobId } = data;
	return (
		<div className='bg-gray-50 flex flex-col gap-2 rounded-sm shadow-2xl'>
			<div
				className={`${
					data.status.toLowerCase() === "cleared" ? "bg-green-800" : "bg-gray-800"
				} text-gray-100 w-full flex justify-between items-center font-semibold rounded-t-sm text-2xl tracking-widest p-4`}
			>
				<div>{data.company}</div>
				<div className='flex gap-4'>
					<button onClick={() => navigate(`/update-job/${jobId}`)}>
						<AiFillEdit />
					</button>
					<button onClick={() => deleteJobMutation({ jobId })}>
						<AiFillDelete />
					</button>
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
