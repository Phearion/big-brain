global.fetch = require('jest-fetch-mock');
global.import = {
	meta: {
		env: {
			VITE_APP_PROD_SERVER_IP: 'localhost',
			VITE_APP_PROD_SERVER_PORT: 42125,
		},
	},
};
