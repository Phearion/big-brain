import { useState } from 'react';
import { Outputs } from './output.tsx';
import { Submit } from './submit';
import { Tips } from './tips.tsx';

export function Body() {
	// states
	const [showOutputs, setShowOutputs] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [submittedRequest, setSubmittedRequest] = useState<string>('');
	// render
	return (
		<div className="body">
			{showOutputs && <Outputs submittedRequest={submittedRequest} />}
			<Submit
				setShowOutputs={setShowOutputs}
				inputValue={inputValue}
				setInputValue={setInputValue}
				setSubmittedRequest={setSubmittedRequest}
			/>
			<Tips />
		</div>
	);
}
