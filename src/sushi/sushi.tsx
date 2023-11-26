export const sendToSushiAPI = async (inputValue: string) => {
	try {
		const response = await fetch(
			`http://${import.meta.env.VITE_APP_PROD_SERVER_IP}:${
				import.meta.env.VITE_APP_API_PORT
			}/request`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: inputValue }),
			},
		);
		const data: string = await response.text();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error:', error);
		return "Une erreur s'est produite, veuillez réessayer plus tard.";
	}
};
