import { useQuery } from "react-query";
import axios from "axios";

export const useGetAllJobs = () => {
	return useQuery(["jobs"], async () => {
		const { data } = await axios.get("http://localhost:5000/job/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
			},
		});
		return data;
	});
};
