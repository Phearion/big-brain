import { render } from '@testing-library/react';
import { Footer } from '../components/Footer.tsx';
import '@testing-library/jest-dom';
import 'jsdom-global/register';

it('should render the footer component correctly', () => {
	const { getByText } = render(<Footer />);
	const footerText = getByText('© 2023 IPSA Scrypt');
	expect(footerText).toBeInTheDocument();
});
