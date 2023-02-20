import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className='w-screen h-screen bg-gray-100 flex justify-center items-center'>
			<Routes>
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
