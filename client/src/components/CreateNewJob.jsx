import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostJob } from "../queryHooks/usePostJob";

const CreateNewJob = () => {
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [status, setStatus] = useState("");

	const navigate = useNavigate();

	const { mutate: addNewJobMutation } = usePostJob();

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-1/2 bg-gray-800 rounded-lg flex flex-col gap-8 items-center p-8'>
				<p className='text-5xl text-gray-100 font-bold uppercase tracking-widest'>Create New Job</p>
				<form
					className='w-4/5 flex flex-col items-center gap-6'
					onSubmit={(e) => {
						e.preventDefault();
						addNewJobMutation({ company, position, status });
						navigate(-1);
					}}
				>
					<input
						type='text'
						placeholder='Company'
						required={true}
						className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Position'
						required={true}
						className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
						value={position}
						onChange={(e) => setPosition(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Status'
						required={true}
						className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					/>
					<button
						className='text-gray-100 p-2 mt-2 rounded-md font-bold text-2xl tracking-wider uppercase'
						type='submit'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateNewJob;
