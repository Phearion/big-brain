import { useEffect } from 'react';
import webPathsList from '../ts/resourcesList.ts';

const windowOpen = (path: string) => {
	window.open(path, '_blank');
};

export const History = ({ submittedRequest }: { submittedRequest: string }) => {
	const history_div = document.querySelector('.history-div');

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

	useEffect(() => {
		addDlLink(webPathsList);
	}, [submittedRequest]); // Dependency array includes submittedRequest so the effect runs whenever submittedRequest changes

	const history_appear = () => {
		if (document.querySelector('.history-request') === null) {
			// eslint-disable-next-line no-alert
			alert('No history yet !');
		}

		if (history_div?.classList.contains('history-div-appear')) {
			history_div?.classList.remove('history-div-appear');
			history_div?.classList.add('history-div-disappear');
		} else {
			history_div?.classList.remove('history-div-disappear');
			history_div?.classList.add('history-div-appear');
		}
	};

	// render
	return (
		<div className="history-container">
			<button onClick={history_appear} className="history-btn">
				History
			</button>
			<div className="history-div">
				<div className="saved-request"></div>
			</div>
		</div>
	);
};
