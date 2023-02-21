import { useMutation } from "react-query";
import axios from "axios";

export const usePostJob = () => {
	return useMutation(
		async ({ company, position, status }) => {
			const { data } = await axios.post(
				"http://localhost:5000/job/",
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
				console.log(data);
			},
		}
	);
};
