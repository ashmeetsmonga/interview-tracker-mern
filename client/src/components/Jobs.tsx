import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Jobs = () => {
	const { data, isLoading, error } = useQuery(["jobs"], async () => {
		const { data } = await axios.get("http://localhost:5000/job/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
			},
		});
		return data;
	});

	console.log(data);

	return <div>Alljobs</div>;
};

export default Jobs;
