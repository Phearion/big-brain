import { useEffect, useState } from 'react';

const createPDFLink = (pdf: Record<string, string>) => {
	const img = document.createElement('img');
	const div = document.createElement('div');
	const link = document.createElement('button');

	console.log('pdf', pdf.name);

	img.src = '././img/pdf-extension.png';
	img.alt = 'pdf-logo';
	img.className = 'pdf-icon-img';

	div.className = 'icon-link-content';

	link.className = 'dl-btn';
	link.textContent = pdf.name as string;
	link.onclick = () => {
		// Decode base64 data, create Uint8Array, and then create blob
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
	};

	div.appendChild(img);
	div.appendChild(link);
	return div;
};

const displayPDFs = (pdfData: Record<string, string>[]) => {
	console.log('displayPDFs', pdfData);
	const container = document.querySelector('.bb-sent-files-container');
	const loaderContainer = document.querySelector('.loader-container');
	const sendBtn = document.querySelector('.send-btn');
	const savedRequest = document.querySelector('.saved-request');
	const separator_ = document.createElement('div');
	separator_.className = 'separator';
	if (container) {
		loaderContainer?.classList.remove('loader-container-appear');
		sendBtn?.classList.remove('send-btn-disappear');
		container.textContent = '';

		for (const pdf of pdfData) {
			if (!pdf.data) {
				continue;
			}

			const div = createPDFLink(pdf);
			container.appendChild(div);
			savedRequest?.appendChild(div);
			savedRequest?.appendChild(separator_);
		}
	}
};

export const History = ({
	historyVisible,
	setHistoryVisible,
	submittedRequest,
	pdfData,
}: {
	historyVisible: boolean;
	pdfData: Record<string, string>[];
	setHistoryVisible: any;
	submittedRequest: string;
}) => {
	const [displayedRequests, setDisplayedRequests] = useState<string[]>([]);

	const hideHistory = () => {
		const historyContainer = document.querySelector('.history-container');
		historyContainer?.classList.add('hide');
		// eslint-disable-next-line no-restricted-globals
		setTimeout(() => setHistoryVisible(false), 1_000);
	};

	const displaySubmittedRequest = (request: string) => {
		const savedRequest = document.querySelector('.saved-request');
		if (savedRequest && !displayedRequests.includes(request)) {
			const historyRequest = document.createElement('div');
			historyRequest.textContent = request;
			historyRequest.className = 'history-request';
			savedRequest.appendChild(historyRequest);

			setDisplayedRequests((prevRequests) => [...prevRequests, request]);
		}
	};

	useEffect(() => {
		if (submittedRequest && !displayedRequests.includes(submittedRequest)) {
			displaySubmittedRequest(submittedRequest);
		}

		if (pdfData.length > 0) {
			displayPDFs(pdfData);
		}
	}, [pdfData]); // Dependency array includes pdfData so effect runs whenever pdfData changes

	// render
	return (
		<div className={`history-container ${historyVisible ? 'show' : ''}`}>
			<div className="history-title">Historique</div>
			<div className="saved-request"></div>
			<div className="cross-history" onClick={hideHistory}></div>
		</div>
	);
};
