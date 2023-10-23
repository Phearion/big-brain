import { useState } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Request } from './components/request.tsx';
import { Section } from './components/section.tsx';
import { Submit } from './components/submit';
import './App.css';

function App() {
	// states
	const [counter, setCounter] = useState<number>(0);

	// render
	return (
		<div className="app">
			<Header />
			<div className="app-div">
				<Section />
				<Submit counter={counter} setCounter={setCounter} />
				<Request counter={counter} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
