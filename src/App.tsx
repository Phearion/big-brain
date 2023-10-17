import React from 'react';
import logo from './logo.png';
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {SubmitBtn} from "./components/submit";


function App() {
  return (
    <div className="App">
        <Header/>
        <header className="App-header">
            <h1>Big Brain</h1>
            <p>
                Par les étudiants, pour les étudiants
            </p>
            <input type="text" placeholder="Dis moi tout chakal" className="Request"/>
            <SubmitBtn />

        </header>
        <Footer />
    </div>
  );
}

export default App;
