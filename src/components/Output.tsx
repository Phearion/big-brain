import { useEffect, useState } from 'react';

export const Outputs = ({
	submittedRequest,
	pdfData,
	isLoading,
}: {
	isLoading: boolean;
	pdfData: Record<string, string>[];
	submittedRequest: string;
}) => {
	const [renderedPdfData, setRenderedPdfData] = useState<Record<string, string>[]>([]);

	useEffect(() => {
		if (pdfData.length > 0) {
			setRenderedPdfData(pdfData);
		}
	}, [pdfData]); // Dependency array includes pdfData so effect runs whenever pdfData changes

	// render
	return (
		<div className="output">
			<div className="student-request-container">
				<img src={'././img/user.png'} alt="student-logo" className="student-logo"></img>
				<p className="student-question">{submittedRequest}</p>
			</div>
			{renderedPdfData.length === 0 && isLoading && (
				<>
					<div className="bb-answer-container">
						<img src={'././img/bigbrain-logo.png'} alt="brain-logo" className="ai-logo"></img>
						<p className="bb-answer">
							Je suis actuellement en train de traiter ta demande. Sois patient ! ;)
						</p>
					</div>
					<div className="bb-sent-files-container"></div>
				</>
			)}

			{renderedPdfData.length > 0 && (
				<>
					<div className="bb-sent-files-container">
						{renderedPdfData.map((pdf, index) => {
							if (!pdf.data) {
								return null;
							}

							return (
								<div key={index} className="icon-link-content">
									<img src="././img/pdf-extension.png" alt="pdf-logo" className="pdf-icon-img" />
									<button
										className="dl-btn"
										onClick={() => {
											const binaryString = atob(pdf.data as string);
											const len = binaryString.length;
											const bytes = new Uint8Array(len);
											for (let ind = 0; ind < len; ind++) {
												bytes[ind] = binaryString.codePointAt(ind) as number;
											}

											const blob = new Blob([bytes.buffer], { type: 'application/pdf' });
											const link = document.createElement('a');
											link.href = window.URL.createObjectURL(blob);
											link.download = pdf.name as string;
											link.click();
										}}
									>
										{pdf.name}
									</button>
								</div>
							);
						})}
					</div>
				</>
			)}

			{renderedPdfData.length === 0 && !isLoading && (
				<>
					<div className="bb-answer-container">
						<img src={'././img/bigbrain-logo.png'} alt="brain-logo" className="ai-logo"></img>
						<p className="bb-answer">
							Désolé, je n'ai rien trouvé en lien avec ce que tu as demandé. :(
						</p>
					</div>
					<div className="bb-sent-files-container"></div>
				</>
			)}
		</div>
	);
};
