import { Body } from './components/Body.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import './styles/common-style.css';
import './styles/mobiles-style.css';
import './styles/tablets-style.css';
import './styles/large-screens-style.css';

function App() {
	// render
	return (
		<div className="app">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
