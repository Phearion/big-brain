import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

export const sanitizeInput = (input: string) => {
	let sanitizedString = '';

	const allowedCharacters = /[\dA-Za-z]/;

	for (const char of input) {
		if (allowedCharacters.test(char)) {
			sanitizedString += char;
		} else {
			throw new Error(`Caractère non autorisé détecté : ${char}`);
		}
	}

	// Utiliser markdown-it pour autoriser le balisage Markdown
	const markdownResult = markdown.render(sanitizedString);

	// Utiliser DOMPurify pour nettoyer les balises HTML potentiellement dangereuses
	return DOMPurify.sanitize(markdownResult);
};
