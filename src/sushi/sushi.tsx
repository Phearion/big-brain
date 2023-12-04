export const sendToSushiAPI = async (inputValue: string) => {
	try {
		console.log('sendToSushiAPI');
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
		return await response.json();
	} catch (error) {
		console.error('Error:', error);
		return "Une erreur s'est produite, veuillez réessayer plus tard.";
	}
};
