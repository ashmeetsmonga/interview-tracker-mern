import { useQuery } from "react-query";
import axios from "axios";

export const useGetJob = ({ jobId }) => {
	return useQuery(["job"], async () => {
		try {
			console.log("here", jobId);
			const { data } = await axios.get(`http://localhost:5000/job/${jobId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
				},
			});
			console.log("getJob data");
			return data;
		} catch (err) {
			console.log(err);
		}
	});
};
