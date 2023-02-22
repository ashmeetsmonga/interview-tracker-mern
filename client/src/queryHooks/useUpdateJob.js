import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

export const useUpdateJob = (jobId) => {
	const queryClient = useQueryClient();
	return useMutation(
		async ({ company, position, status }) => {
			const { data } = await axios.patch(
				`http://localhost:5000/job/${jobId}`,
				{
					company,
					position,
					status,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("interview-tracker-token")}`,
					},
				}
			);
			return data;
		},
		{
			onSettled: (data) => {
				queryClient.refetchQueries("jobs");
			},
		}
	);
};
