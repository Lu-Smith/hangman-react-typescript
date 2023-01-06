
import './App.css';
import React, {useState} from 'react';
import Figure from './components/Figure';
import Footer from './components/Footer';
import Header from './components/Header';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';

const words: string[]= ['application', 'programming', 'interface', 'wizard', 'biscuits'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetterw] = useState([]);

  return (
    <div className="App">
        <Header />
        <div className="game-container">
           <Figure />
           <WrongLetters />
           <Word selectedWord = {selectedWord} correctLetters={correctLetters} />
        </div>
        <PopUp />
        <Notification />
        <Footer />
    </div>
  );
}

export default App;
