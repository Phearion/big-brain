import { useState } from 'react';
import { History } from './History.tsx';
import { Outputs } from './Output.tsx';
import { Submit } from './Submit.tsx';
import { Tips } from './Tips.tsx';

export const Body = () => {
	// states
	const [showOutputs, setShowOutputs] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [submittedRequest, setSubmittedRequest] = useState<string>('');
	const [pdfData, setPdfData] = useState<Record<string, string>[]>([]);

	const handleSubmit = (request: { pdfData: Record<string, string>[]; request: string }) => {
		setSubmittedRequest(request.request);
		setPdfData(request.pdfData);
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
			{showOutputs && <Outputs submittedRequest={submittedRequest} pdfData={pdfData} />}
			<History submittedRequest={submittedRequest} />
			<div className="loader-container">
				<span className="loader"></span>
			</div>
		</div>
	);
};
