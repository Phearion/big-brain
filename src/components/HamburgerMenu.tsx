export const HamburgerMenu = ({
	menuVisible,
	setMenuVisible,
	showCredits,
	setShowCredits,
	setCreditsVisible,
	showHistory,
	setShowHistory,
	setHistoryVisible,
	historyVisible,
}: {
	historyVisible: boolean;
	menuVisible: boolean;
	setCreditsVisible: any;
	setHistoryVisible: any;
	setMenuVisible: any;
	setShowCredits: any;
	setShowHistory: any;
	showCredits: boolean;
	showHistory: boolean;
	showMenu: boolean;
}) => {
	const hideMenu = () => {
		const menuContainer = document.querySelector('.menu-div');
		menuContainer?.classList.add('hide');
		// eslint-disable-next-line no-restricted-globals
		setTimeout(() => setMenuVisible(false), 1_000);
	};

	const hideHistory = () => {
		const historyContainer = document.querySelector('.history-container');
		historyContainer?.classList.add('hide');
		// eslint-disable-next-line no-restricted-globals
		setTimeout(() => setHistoryVisible(false), 1_000);
	};

	const handleClickCredits = () => {
		setShowCredits(!showCredits);
		setCreditsVisible(true);
	};

	const handleClickHistory = () => {
		if (historyVisible) {
			hideHistory();
		} else {
			setShowHistory(!showHistory);
			setHistoryVisible(true);
			hideMenu();
		}
	};

	return (
		<div className={`menu-div ${menuVisible ? 'show' : 'hide'}`}>
			<div className="choice-div">
				<div className="choice-div-title">Menu</div>
				<div className="choice-text first-choice" onClick={handleClickHistory}>
					HISTORIQUE
				</div>
				<div className="choice-text second-choice" onClick={handleClickCredits}>
					CREDITS
				</div>
				<div className="cross-menu" onClick={hideMenu}></div>
			</div>
		</div>
	);
};
