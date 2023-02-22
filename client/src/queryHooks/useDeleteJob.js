import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useDeleteJob = () => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ jobId }) => {
			return await axios.delete(`http://localhost:5000/job/${jobId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
				},
			});
		},
		{
			onSettled: () => queryClient.refetchQueries("jobs"),
		}
	);
};
