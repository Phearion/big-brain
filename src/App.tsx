import { useState } from 'react';
import send from '../img/envoyer.png';
import { Footer } from './components/footer.tsx';
import { Header } from './components/header.tsx';
import './App.css';

function App() {
	const [inputValue, setInputValue] = useState<string>('');
	const [counter, setCounter] = useState<number>(0);
	const [placeholder, setPlaceholder] = useState<string>('Pose moi ta question...');

	const handleSubmit = (event: { preventDefault(): void }) => {
		if (inputValue.length === 0) {
			setCounter(counter + 1);
			setInputValue('');
		} else {
			setPlaceholder("Je me ferais un plaisir de t'aider !");
		}

		event.preventDefault();
	};

	return (
		<div className="App">
			<Header />
			<div className="App-div">
				<h1 className="BB">Big Brain</h1>
				<p className="slogan">Par les étudiants, pour les étudiants</p>
				<form className="input">
					<input
						id="input"
						type="text"
						placeholder={placeholder}
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						className="Request"
					/>
					<button onClick={handleSubmit} className="subBtn">
						<img id="send" src={send} width={30} height={25} />
					</button>
				</form>
				<div className="request_number">
					<label>Nombre de requêtes : {counter}</label>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
