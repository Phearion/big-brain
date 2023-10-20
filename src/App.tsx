import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import send from '../img/envoyer.png';
import { Footer } from './components/footer.tsx';
import { Header } from './components/header.tsx';
import './App.css';



function App() {
	// State variables
	const [inputValue, setInputValue] = useState<string>('');
	const [counter, setCounter] = useState<number>(0);
	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');

	// Handle submit
	const handleSubmit = (event: { preventDefault(): void }) => {
		if (inputValue.length === 0) {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
		} else {
			setCounter(counter + 1);
			setInputValue('');
			setPlaceholder('Pose moi ta question...');
		}

		event.preventDefault();
	};

	return (
		<div className="app">
			<Header />
			<div className="app-div">
				<h1 className="bb-title">Big Brain</h1>
				<p className="slogan">Par les étudiants, pour les étudiants</p>
				<form className="input">
					<input
						id="input"
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						className="request"
					/>
					<button onClick={handleSubmit} className="send-btn">
						<img alt="send_logo" id="send" src={send} width={30} height={25} />
					</button>
				</form>
				<div className="request-number">
					<label>Nombre de requêtes : {counter}</label>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;