import { useState } from 'react';
import { saveRequestToDB } from '../sushi/saveRequest.tsx';
import { sendToSushiAPI } from '../sushi/sushi.tsx';

export function Submit({
	setShowOutputs,
	inputValue,
	setInputValue,
	setSubmittedRequest,
}: {
	inputValue: string;
	setInputValue(inputValue: string): void;
	setShowOutputs(showOutputs: boolean): void;
	setSubmittedRequest(submittedRequest: {
		pdfData: Record<string, string>[];
		request: string;
	}): void;
}) {
	// states
	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');
	const [apiError, setApiError] = useState<string>(''); // new state variable for API errors

	// effects
	const handleSubmit = async (event: { preventDefault(): void }): Promise<void> => {
		event.preventDefault();

		setInputValue(inputValue);
		if (inputValue.length === 0) {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
			setShowOutputs(false);
		} else {
			let pdfData: Record<string, string>[] = [];
			try {
				const loaderContainer = document.querySelector('.loader-container');
				const sendBtn = document.querySelector('.send-btn');
				const backgroundImgBrain = document.querySelector('.background-img');
				loaderContainer?.classList.add('loader-container-appear');
				sendBtn?.classList.add('send-btn-disappear');
				backgroundImgBrain?.classList.add('background-img-disappear');

				const res = await sendToSushiAPI(inputValue);
				// if res is object containing a files key
				if (res.files) {
					pdfData = res.files;
				} else {
					setApiError('Woaaa, je lag de fou là. Peut être en maintenance.'); // set the error message
					return;
				}
			} catch {
				setApiError("Une erreur s'est produite, veuillez réessayer plus tard."); // set the error message
				return;
			}

			try {
				await saveRequestToDB(inputValue);
			} catch {
				setApiError("Une erreur s'est produite, veuillez réessayer plus tard."); // set the error message
				return;
			}

			if (!apiError) {
				setSubmittedRequest({ request: inputValue, pdfData });
				setInputValue('');
				setPlaceholder('Pose moi ta question...');
				setShowOutputs(true);
			}
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
					<div className="loader-container">
						<span className="loader"></span>
					</div>
				</div>
			</form>
		</div>
	);
}
