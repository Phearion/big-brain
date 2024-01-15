import { useState } from 'react';
import { Body } from './components/Body.tsx';
import { Credits } from './components/Credits.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import './styles/common-style.css';
import './styles/mobiles-style.css';
import './styles/tablets-style.css';
import './styles/large-screens-style.css';

function App() {
	const [showCredits, setShowCredits] = useState(false);
	const [creditsVisible, setCreditsVisible] = useState(false);

	// render
	return (
		<div className="app">
			<Header
				showCredits={showCredits}
				setShowCredits={setShowCredits}
				setCreditsVisible={setCreditsVisible}
			/>
			<Credits
				showCredits={showCredits}
				creditsVisible={creditsVisible}
				setCreditsVisible={setCreditsVisible}
			/>
			<Body />
			<Footer />
		</div>
	);
}

export default App;
