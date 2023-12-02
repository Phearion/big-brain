import { render, fireEvent } from '@testing-library/react';
import { Submit } from '../components/submit.tsx';

describe('Submit component', () => {
	const setInputValue = jest.fn();
	const setShowOutputs = jest.fn();
	const setSubmittedRequest = jest.fn();
	const inputValue = jest.fn();

	it('should display placeholder text when input is empty', () => {
		const { getByPlaceholderText } = render(
			<Submit
				inputValue=""
				setInputValue={setInputValue}
				setShowOutputs={setShowOutputs}
				setSubmittedRequest={setSubmittedRequest}
			/>,
		);
		const input = getByPlaceholderText('Pose moi ta question...');
		expect(input).toBe('Pose moi ta question...');
	});

	it('should update input value when typing', () => {
		const { getByPlaceholderText } = render(
			<Submit
				inputValue=""
				setInputValue={setInputValue}
				setShowOutputs={setShowOutputs}
				setSubmittedRequest={setSubmittedRequest}
			/>,
		);
		const input = getByPlaceholderText('Pose moi ta question...');
		fireEvent.change(input, { target: { value: 'test' } });
		expect(inputValue).toBe('test');
	});

	it('should clear input value when submit button is clicked', () => {
		const { getByRole } = render(
			<Submit
				inputValue="test"
				setInputValue={setInputValue}
				setShowOutputs={setShowOutputs}
				setSubmittedRequest={setSubmittedRequest}
			/>,
		);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(inputValue).toBe('');
	});

	it('should not submit when input is empty', () => {
		const { getByPlaceholderText, getByRole } = render(
			<Submit
				inputValue=""
				setInputValue={setInputValue}
				setShowOutputs={setShowOutputs}
				setSubmittedRequest={setSubmittedRequest}
			/>,
		);
		const input = getByPlaceholderText('Pose moi ta question...');
		const button = getByRole('button');
		fireEvent.click(button);
		expect(input).toBe('');
	});
});
