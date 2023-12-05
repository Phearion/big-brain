import { Body } from './components/Body.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import './App.css';

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
