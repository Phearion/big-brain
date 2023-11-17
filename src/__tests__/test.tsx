import { sanitizeInput } from '../Sanitizer/Sanitizer';

test('sanitizer', () => {
	const res = sanitizeInput('dgdfshfbe00');
	const expectedRes = 'dgdfshfbe00';

	expect(res).toBe(expectedRes);

	// const res2 = sanitizeInput("dgd['hfbe00");
	// const expectedres2 = Error('Caractère non autorisé détecté : [');

	// expect(res2).toBe(expectedres2);
});
