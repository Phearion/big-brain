
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import * as MarkdownIt from 'markdown-it';

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

// Create a single instance of MarkdownIt
const markdown = new MarkdownIt({
	html: false, // disable inline HTML
	linkify: true,
	typographer: true,
});

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

	// Use markdown-it to allow Markdown markup
	const markdownResult = markdown.render(sanitizedString);

	// Use DOMPurify to clean potentially dangerous HTML tags
	return DOMPurify.sanitize(markdownResult);
};
