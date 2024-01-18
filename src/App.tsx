import { useEffect, useState } from 'react';
import { Body } from './components/Body.tsx';
import { Credits } from './components/Credits.tsx';
import { Footer } from './components/Footer.tsx';
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
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line no-restricted-globals
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 3_000);
		// eslint-disable-next-line no-restricted-globals
		return () => clearTimeout(timer);
	}, []);

	// render
	return (
		<>
			{isLoaded === false ? (
				<IntroPage />
			) : (
				<div className="app fade-in">
					<Header
						showCredits={showCredits}
						setShowCredits={setShowCredits}
						setCreditsVisible={setCreditsVisible}
					/>
					<Body />
					<Footer />
					<Credits
						creditsVisible={creditsVisible}
						setCreditsVisible={setCreditsVisible}
						showCredits={showCredits}
					/>
				</div>
			)}
		</>
	);
}

export default App;
