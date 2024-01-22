import { useEffect, useState } from 'react';
import { Body } from './components/Body.tsx';
import { Credits } from './components/Credits.tsx';
import { Footer } from './components/Footer.tsx';
import { HamburgerMenu } from './components/HamburgerMenu.tsx';
import { Header } from './components/Header.tsx';
import { IntroPage } from './components/IntroPage.tsx';
import './styles/intro-page-common-style.css';
import './styles/intro-page-mobiles-style.css';
import './styles/intro-page-tablets-style.css';
import './styles/intro-page-large-screens-style.css';
import './styles/main-page-common-style.css';
import './styles/main-page-mobiles-style.css';
import './styles/main-page-tablets-style.css';
import './styles/main-page-large-screens-style.css';

function App() {
	const [showCredits, setShowCredits] = useState(false);
	const [creditsVisible, setCreditsVisible] = useState(false);
	const [isSetIntroPage, setIsSetIntroPage] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [showHistory, setShowHistory] = useState(false);
	const [historyVisible, setHistoryVisible] = useState(false);
	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		const timer = setTimeout(() => {
			setIsSetIntroPage(true);
		}, 3_000);
		// eslint-disable-next-line no-restricted-globals
		return () => clearTimeout(timer);
	}, []);

	// render
	return (
		<>
			{isSetIntroPage === false ? (
				<IntroPage />
			) : (
				<div className="app fade-in">
					<Header
						showCredits={showCredits}
						setShowCredits={setShowCredits}
						setCreditsVisible={setCreditsVisible}
						showMenu={showMenu}
						setShowMenu={setShowMenu}
						setMenuVisible={setMenuVisible}
					/>

					<Body
						isLoading={isLoading}
						setIsLoading={setIsLoading}
						historyVisible={historyVisible}
						setHistoryVisible={setHistoryVisible}
					/>
					<Credits creditsVisible={creditsVisible} setCreditsVisible={setCreditsVisible} />

					<HamburgerMenu
						menuVisible={menuVisible}
						setMenuVisible={setMenuVisible}
						showMenu={showMenu}
						showCredits={showCredits}
						setShowCredits={setShowCredits}
						setCreditsVisible={setCreditsVisible}
						showHistory={showHistory}
						setShowHistory={setShowHistory}
						setHistoryVisible={setHistoryVisible}
						historyVisible={historyVisible}
					/>

					<Footer />
				</div>
			)}
		</>
	);
}

export default App;
