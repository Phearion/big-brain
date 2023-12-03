export const saveRequestToDB = async (request: string) => {
	console.log('saveRequestToDB', request);
	try {
		const response = await fetch(
			`http://${import.meta.env.VITE_APP_PROD_SERVER_IP}:${
				import.meta.env.VITE_APP_API_PORT
			}/saveData`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: { request } }),
			},
		);

		if (!response.ok) {
			// Handle non-2xx status codes
			console.error('Server responded with non-2xx status:', response.status);
			return { success: false, message: 'Server error occurred. Please try again.' };
		}

		return { success: true };
	} catch (error) {
		// Handle network errors
		console.error('Network error:', error);
		return { success: false, message: 'Network error occurred. Please try again later.' };
	}
};
