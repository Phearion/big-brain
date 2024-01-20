import { useEffect } from 'react';
import webPathsList from '../ts/resourcesList.ts';

const windowOpen = (path: string) => {
	window.open(path, '_blank');
};

export const History = ({
	submittedRequest,
	historyVisible,
	setHistoryVisible,
}: {
	historyVisible: boolean;
	setHistoryVisible: any;
	submittedRequest: string;
}) => {
	const addDlLink = (paths: any) => {
		const saved_request = document.querySelector('.saved-request');
		const history_request = document.createElement('div');
		const separator_ = document.createElement('div');

		history_request.className = 'history-request';
		history_request.textContent = submittedRequest as string;

		saved_request?.appendChild(history_request);

		separator_.className = 'separator';

		for (const path of paths) {
			if (submittedRequest) {
				const img = document.createElement('img');
				const div = document.createElement('div');
				const link = document.createElement('button');

				img.src = '././img/pdf-extension.png';
				img.alt = 'pdf-icon';
				img.className = 'pdf-icon-img';

				div.className = 'icon-link-content';

				link.className = 'dl-btn';
				link.textContent = path.split('/').pop() as string;
				link.onclick = () => windowOpen(path);

				div?.appendChild(img);
				div?.appendChild(link);
				saved_request?.appendChild(div);
				saved_request?.appendChild(separator_);
			}
		}
	};

	const hideHistory = () => {
		const historyContainer = document.querySelector('.history-container');
		historyContainer?.classList.add('hide');
		// eslint-disable-next-line no-restricted-globals
		setTimeout(() => setHistoryVisible(false), 1_000);
	};

	useEffect(() => {
		addDlLink(webPathsList);
	}, [submittedRequest]); // Dependency array includes submittedRequest so the effect runs whenever submittedRequest changes

	// render
	return (
		<div className={`history-container ${historyVisible ? 'show' : ''}`}>
			<div className="history-title">Historique</div>
			<div className="saved-request"></div>
			<div className="cross-history" onClick={hideHistory}></div>
		</div>
	);
};
