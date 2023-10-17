import { useState } from 'react';
import './App.css';
import {Header} from "./components/header.tsx";
import {Footer} from "./components/footer.tsx";
//import {Footer} from "./components/footer";
//import {Header} from "./components/header";
//import {SubmitBtn} from "./components/submit";

function App() {
    const [inputValue, setInputValue] = useState('');
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() != ''){
            setMessage('');
            setInputValue('');
            setCounter(counter + 1);
        }
        else{
            setMessage("Demande moi de t'aider ;)")
        }

    };
    return (
        <div className="App">
            <Header/>
            <div className="App-div">
                <h1>Big Brain</h1>
                <p>
                    Par les étudiants, pour les étudiants
                </p>
                <div>
                    <input
                        type="text"
                        placeholder="Saisissez votre requête"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="Request"
                    /><br/><br/>
                    <div>
                        {message && <p>{message}</p>}
                        <label>Nombre de soumissions : {counter}</label>
                    </div>
                    <button onClick={handleSubmit} className="subBtn">Envoyer</button>
                </div>


            </div>
            <Footer />
        </div>
    );
}

export default App;
