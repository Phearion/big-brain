import { useState } from 'react';
import { checkRequest } from '../sushi/checkSushiRequest.tsx';
import { saveRequestToDB } from '../sushi/saveRequest.tsx';
import { sendToSushiAPI } from '../sushi/sushi.tsx';

export function Submit({
	setShowOutputs,
	inputValue,
	setInputValue,
	setSubmittedRequest,
	setIsLoading,
}: {
	inputValue: string;
	setInputValue(inputValue: string): void;
	setIsLoading(isLoading: boolean): void;
	setShowOutputs(showOutputs: boolean): void;
	setSubmittedRequest(submittedRequest: {
		pdfData: Record<string, string>[];
		request: string;
	}): void;
}) {
	// states
	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');
	const [apiError, setApiError] = useState<string>(''); // new state variable for API errors
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	// effects
	const handleSubmit = async (event: { preventDefault(): void }): Promise<void> => {
		event.preventDefault();

		setInputValue(inputValue);
		if (inputValue.length === 0) {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
			setShowOutputs(false);
		} else {
			setIsSubmitting(true);
			setShowOutputs(true);
			// Set the submittedRequest state with only the user's question immediately after the form is submitted
			setSubmittedRequest({ request: inputValue, pdfData: [] });

			const pdfData: Record<string, string>[] = [];
			const loaderContainer = document.querySelector('.loader-container');
			const sendBtn = document.querySelector('.send-btn');
			const outputDiv = document.querySelector('.output');

			try {
				const checkRequestResult = await checkRequest(inputValue);
				if (checkRequestResult.success) {
					let pdfData: Record<string, string>[] = [];
					try {
						setIsLoading(true);
						loaderContainer?.classList.add('loader-container-appear');
						sendBtn?.classList.add('send-btn-disappear');
						outputDiv?.classList.add('output-appear');

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
				} else if (checkRequestResult.status === 400) {
					setApiError('Injection SQL détectée !'); // set the error message
					// eslint-disable-next-line no-alert
					alert('Injection SQL détectée ! La prochaine fois, je te ban !');
				} else {
					setApiError('Woaaa, je lag de fou là. Peut être en maintenance.'); // set the error message
				}
			} catch {
				setApiError("Une erreur s'est produite, veuillez réessayer plus tard."); // set the error message
			}

			try {
				await saveRequestToDB(inputValue);
			} catch {
				setApiError("Une erreur s'est produite, veuillez réessayer plus tard."); // set the error message
				return;
			}

			if (!apiError) {
				// Add the PDF data to the submittedRequest state after it is fetched from the API
				setSubmittedRequest({ request: inputValue, pdfData });
				setInputValue('');
				setPlaceholder('Pose moi ta question...');
				setShowOutputs(true);
			}

			setIsSubmitting(false);
			setIsLoading(false);
			loaderContainer?.classList.add('loader-container-disappear');
			sendBtn?.classList.add('send-btn-appear');
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
						disabled={isSubmitting}
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
