export const Header = ({
	showCredits,
	setShowCredits,
	setCreditsVisible,
	showMenu,
	setShowMenu,
	setMenuVisible,
}: {
	setCreditsVisible: any;
	setMenuVisible: any;
	setShowCredits: any;
	setShowMenu: any;
	showCredits: boolean;
	showMenu: boolean;
}) => {
	const handleClickCredits = () => {
		setShowCredits(!showCredits);
		setCreditsVisible(true);
	};

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
		setMenuVisible(true);
	};

	// render
	return (
		<div className="header">
			<h1 className="bb-title">Big Brain</h1>

			<p className="slogan">
				Par les{' '}
				<span className="student-word-one" onClick={handleClickCredits}>
					étudiants
				</span>
				, pour les étudiants
			</p>

			<div className="hamburger-menu-container" onClick={handleClickMenu}>
				<span className="mb-line"></span>
				<span className="mb-line"></span>
				<span className="mb-line"></span>
			</div>

			<img
				className="background-img"
				src={'././img/brain.png'}
				alt="brain-image-in-background"
			></img>
		</div>
	);
};
