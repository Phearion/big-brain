export const Header = ({
	showCredits,
	setShowCredits,
	setCreditsVisible,
}: {
	setCreditsVisible: any;
	setShowCredits: any;
	showCredits: boolean;
}) => {
	const handleClick = () => {
		setShowCredits(!showCredits);
		setCreditsVisible(true);
	};

	// render
	return (
		<div className="header">
			<h1 className="bb-title">Big Brain</h1>
			<p className="slogan">
				Par les{' '}
				<span className="student-word-one" onClick={handleClick}>
					étudiants
				</span>
				, pour les étudiants
			</p>
			<img
				className="background-img"
				src={'././img/brain.png'}
				alt="brain-image-in-background"
			></img>
		</div>
	);
};
