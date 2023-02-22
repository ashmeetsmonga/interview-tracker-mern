import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useGetJob } from "../queryHooks/useGetJob";

const UpdateJob = () => {
	const { jobId } = useParams();
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [status, setStatus] = useState("");

	const navigate = useNavigate();

	const { data, isLoading } = useGetJob({ jobId });

	useEffect(() => {
		setCompany(data?.company || "");
		setPosition(data?.position || "");
		setStatus(data?.status || "");
	}, [data]);

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-1/2 bg-gray-800 rounded-lg flex flex-col gap-8 items-center p-8'>
				<p className='text-5xl text-gray-100 font-bold uppercase tracking-widest'>Update Job</p>
				<form
					className='w-4/5 flex flex-col items-center gap-6'
					onSubmit={(e) => {
						e.preventDefault();
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

export default UpdateJob;
