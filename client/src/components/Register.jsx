import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registerUser = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post("http://localhost:5000/auth/register", {
				name,
				email,
				password,
			});
			console.log(data);
			localStorage.setItem("interview-tracker-name", data.name);
			localStorage.setItem("interview-tracker-token", data.token);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='w-1/3 bg-gray-800 rounded-lg flex flex-col gap-8 items-center p-8'>
			<p className='text-5xl text-gray-100 font-bold uppercase tracking-widest'>Register</p>
			<form className='w-4/5 flex flex-col items-center gap-4' onSubmit={registerUser}>
				<input
					type='text'
					placeholder='name'
					required={true}
					className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type='text'
					placeholder='email'
					required={true}
					className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='password'
					required={true}
					className='w-full bg-gray-100 text-center p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					className='text-gray-100 p-2 mt-2 rounded-md font-bold text-2xl tracking-wider uppercase'
					type='submit'
				>
					Submit
				</button>
			</form>
			<p className='text-gray-100 text-lg -mt-4 tracking-wider'>
				Already have an account,{" "}
				<Link className='font-bold underline' to={"/login"}>
					Login
				</Link>
			</p>
		</div>
	);
};

export default Register;
