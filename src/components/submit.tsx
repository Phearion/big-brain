import { useState } from 'react';
import send from '../../img/envoyer.png';

export function Submit({
	counter,
	setCounter,
}: {
	counter: number;
	setCounter(counter: number): void;
}) {
	// states
	const [inputValue, setInputValue] = useState<string>('');
	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');

	// effects
	const handleSubmit = (event: { preventDefault(): void }) => {
		if (inputValue.length === 0) {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
		} else {
			setCounter(counter + 1);
			setInputValue('');
			setPlaceholder('Pose moi ta question...');
		}

		event.preventDefault();
	};

	// render
	return (
		<form className="input">
			<input
				id="input"
				type="text"
				placeholder={placeholder}
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				className="request"
			/>

			<button onClick={handleSubmit} className="send-btn">
				<img alt="send_logo" id="send" src={send} width={30} height={25} />
			</button>
		</form>
	);
}
