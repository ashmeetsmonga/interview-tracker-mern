import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginUser = () => {};

	return (
		<div className='w-1/3 bg-gray-800 rounded-lg flex flex-col gap-8 items-center p-8'>
			<p className='text-5xl text-white font-bold uppercase tracking-widest'>Login</p>
			<form className='flex flex-col items-center gap-4' onSubmit={loginUser}>
				<input
					type='text'
					placeholder='email'
					className='p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='text'
					placeholder='password'
					className='p-2 text-xl tracking-widest rounded-md outline-none focus:outline-none'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					className='bg-white text-gray-800 p-2 mt-4 rounded-md font-bold text-2xl tracking-wider uppercase'
					type='submit'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
