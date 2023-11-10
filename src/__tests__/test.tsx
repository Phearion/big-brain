import { sanitizeInput } from '../Sanitizer/sanitizer.tsx';

it('sanitizer', () => {
	const res = sanitizeInput('dgdfshfbe00');
	const expectedRes = '<p>dgdfshfbe00</p>';

	expect(res).toBe(expectedRes);

	try {
		sanitizeInput("dgd['hfbe00");
	} catch (error: any) {
		expect(error.message).toBe('Caractère non autorisé détecté : [');
	}
});
