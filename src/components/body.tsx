import { useState } from 'react';
import { History } from './history.tsx';
import { Outputs } from './output.tsx';
import { Submit } from './submit';
import { Tips } from './tips.tsx';

export const Body = () => {
	// states
	const [showOutputs, setShowOutputs] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [submittedRequest, setSubmittedRequest] = useState<string>('');

	const handleSubmit = (request: string) => {
		setSubmittedRequest(request);
	};

	// render
	return (
		<div className="body">
			<Submit
				setShowOutputs={setShowOutputs}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setSubmittedRequest={handleSubmit} // pass the new function
			/>
			<Tips />
			{showOutputs && <Outputs submittedRequest={submittedRequest} />}
			<History submittedRequest={submittedRequest} />
		</div>
	);
};
