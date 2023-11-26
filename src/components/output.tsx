import { useEffect } from 'react';
import webPathsList from '../ts/resourcesList.ts';

const windowOpen = (path: string) => {
	window.open(path, '_blank');
};

const addDlLink = (paths: any) => {
	const icon_link = document.querySelector('.icon-link');
	if (icon_link) {
		icon_link.textContent = '';
	}

	for (const path of paths) {
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
		icon_link?.appendChild(div);
	}
};

const output_apparition = (paths: any) => {
	const output = document.querySelector('.output');
	output?.classList.add('output-appear');
	addDlLink(paths);
};

export const Outputs = ({ submittedRequest }: { submittedRequest: string }) => {
	useEffect(() => {
		output_apparition(webPathsList);
	}, []); // Empty dependency array means this effect runs once on mount

	// render
	return (
		<div className="output">
			<div className="student-request-container">
				<img src={'././img/user.png'} alt="student-logo" className="student-logo"></img>
				<p className="student-question">{submittedRequest}</p>
			</div>
			<div className="bb-answer-container">
				<img src={'././img/brain.png'} alt="brain-logo" className="ai-logo"></img>
				<p className="bb-answer">Voici ce que j'ai trouvé en lien avec ce que tu as demandé :</p>
			</div>
			<div className="bb-sent-files-container">
				<div className="icon-link"></div>
			</div>
		</div>
	);
};
