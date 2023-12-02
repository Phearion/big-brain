import { useState } from 'react';
import { saveRequestToDB } from '../sushi/saveRequest.tsx';
// import { sendToSushiAPI } from '../sushi/sushi.tsx';

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
			/* const res = await sendToSushiAPI(inputValue);
			if (res) {
				const bbAnswer = document.querySelector('.bb-answer') as HTMLParagraphElement;
				if (bbAnswer) {
					bbAnswer.innerText = `Voici ce que j'ai trouvé en lien avec ce que tu as demandé : ${res}`;
				}
			}*/

			try {
				await saveRequestToDB(inputValue, '111');
			} catch (error) {
				console.log(error);
			}

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
