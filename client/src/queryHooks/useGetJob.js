import { useQuery } from "react-query";
import axios from "axios";

export const useGetJob = () => {
	return useQuery(["job"], async ({ jobId }) => {
		try {
			console.log("here");
			const { data } = await axios.get(`http://localhost:5000/job/${jobId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
				},
			});
			console.log("getJob data", data);
			return data;
		} catch (err) {
			console.log(err);
		}
	});
};
