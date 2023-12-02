export const saveRequestToDB = async (request: string, userID: string) => {
	console.log('saveRequestToDB', request, userID);
	try {
		const dataToSave = { request, userID };
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
