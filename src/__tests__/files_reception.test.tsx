import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';
import { Submit } from '../components/submit.tsx';
import { sendToSushiAPI } from '../sushi/sushi.tsx';

jest.mock('../sushi/sushi.tsx', () => ({
	sendToSushiAPI: jest.fn(),
}));

describe('Submit component', () => {
	const setShowOutputs = jest.fn();
	const setSubmittedRequest = jest.fn();

	beforeEach(() => {
		(sendToSushiAPI as jest.Mock).mockClear();
	});

	it('should return the correct file when user sends a request', async () => {
		// Mock the sendToSushiAPI function to return a specific file
		(sendToSushiAPI as jest.Mock).mockResolvedValueOnce('expectedFile');

		const Wrapper = () => {
			const [inputValue, setInputValue] = useState('test');
			return (
				<Submit
					inputValue={inputValue}
					setInputValue={setInputValue}
					setShowOutputs={setShowOutputs}
					setSubmittedRequest={setSubmittedRequest}
				/>
			);
		};

		const { getByRole } = render(<Wrapper />);

		const button = getByRole('button');
		fireEvent.click(button);

		await waitFor(() => {
			// Check if sendToSushiAPI was called and returned the expected file
			expect(sendToSushiAPI).toHaveBeenCalledTimes(1);
			expect(sendToSushiAPI).toHaveReturnedWith('expectedFile');
		});
	});
});
