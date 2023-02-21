import { Route, Routes } from "react-router-dom";
import CreateNewJob from "./components/CreateNewJob";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";

function App() {
	return (
		<div className='w-screen h-screen bg-gray-100 flex justify-center items-center'>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/jobs'
					element={
						<RequireAuth>
							<Jobs />
						</RequireAuth>
					}
				/>
				<Route
					path='/create-new-job'
					element={
						<RequireAuth>
							<CreateNewJob />
						</RequireAuth>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
