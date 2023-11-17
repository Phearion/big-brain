import { Body } from './components/body.tsx';
import { Footer } from './components/footer';
import { Header } from './components/header.tsx';
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
