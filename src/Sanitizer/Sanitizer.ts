import * as sanitizeHtml from 'sanitize-html';

export const sanitizeInput = (input: string): string => {
	let sanitizedString = '';

	const allowedCharacters = /[\dA-Za-z]/;

	for (const char of input) {
		if (allowedCharacters.test(char)) {
			sanitizedString += char;
		} else {
			throw new Error(`Caractère non autorisé détecté : ${char}`);
		}
	}

	// Utiliser sanitize-html pour nettoyer le HTML potentiellement dangereux
	return sanitizeHtml(sanitizedString);
};
