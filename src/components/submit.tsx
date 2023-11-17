import { useState } from 'react';

const sendToSushiAPI = async (inputValue: string) => {
	try {
		const response = await fetch('http://localhost:3000/request', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ data: inputValue }),
		});
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
};

export function Submit({
	setShowOutputs,
	inputValue,
	setInputValue,
	setSubmittedRequest,
}: {
	inputValue: string;
	setInputValue(inputValue: string): void;
	setShowOutputs(showOutputs: boolean): void;
	setSubmittedRequest(submittedRequest: string): void;
}) {
	// states

	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');

	// effects
	const handleSubmit = async (event: { preventDefault(): void }) => {
		event.preventDefault();

		setInputValue(inputValue);
		if (inputValue.length === 0) {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
			setShowOutputs(false);
		} else {
			await sendToSushiAPI(inputValue);
			setSubmittedRequest(inputValue);
			setInputValue('');
			setPlaceholder('Pose moi ta question...');
			setShowOutputs(true);
		}
	};

	// render
	return (
		<div className="input-container">
			<form>
				<div className="form-container">
					<input
						id="input"
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						className="input-text"
					/>
					<button onClick={handleSubmit} className="send-btn" type="submit">
						<img
							src={'././img/send.png'}
							alt="send-button-with-plane-design"
							className="button-img"
						></img>
					</button>
				</div>
			</form>
		</div>
	);
}
