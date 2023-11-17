export const Outputs = ({ submittedRequest }: { submittedRequest: string }) => {
	// render
	return (
		<div className="output">
			<div className="student-request-container">
				<img src={'././img/user.png'} alt="student-logo" className="student-logo"></img>
				<p className="student-question">{submittedRequest} </p>
			</div>
			<div className="bb-answer-container">
				<img src={'././img/brain.png'} alt="brain-logo" className="ai-logo"></img>
				<p className="bb-answer">Voici ce que j'ai trouvé en lien avec ce que tu as demandé :</p>
			</div>
		</div>
	);
};
