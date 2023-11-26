interface ImportMetaEnv {
	VITE_APP_API_PORT?: string;
	VITE_APP_PROD_SERVER_IP?: string;
	// add as many environment variables as you need
}

interface ImportMeta {
	env: ImportMetaEnv;
}
