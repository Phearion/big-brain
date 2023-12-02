export const saveRequestToDB = async (request: string, userId: string) => {
	console.log('saveRequestToDB', request, userId);
	try {
		const dataToSave = { request, userId };
		const response = await fetch(
			`http://${import.meta.env.VITE_APP_PROD_SERVER_IP}:${
				import.meta.env.VITE_APP_API_PORT
			}/saveData`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: dataToSave }),
			},
		);
		return response.ok;
	} catch (error) {
		console.error('Error:', error);
		return "Une erreur s'est produite, veuillez réessayer plus tard.";
	}
};
