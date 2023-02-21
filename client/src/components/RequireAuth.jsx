import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("interview-tracker-token")) navigate("/login");
	}, []);

	console.log("required auth rendered");

	return <>{children}</>;
};

export default RequireAuth;
