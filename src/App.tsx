
import './App.css';
import React, {useState, useEffect} from 'react';
import Figure from './components/Figure';
import Footer from './components/Footer';
import Header from './components/Header';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import { showNotification as show } from './helpers/helpers';

const words: string[]= ['variable', 'application', 'statement', 'programming', 'interface', 'wizard', 'algorithm', 'autonomous'];

let selectedWord: string = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, setPlayable] = useState<boolean>(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
        const {key, keyCode} = e;
          if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
      
            if (selectedWord.includes(letter)) {
              if (!correctLetters.includes(letter)) {
                setCorrectLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            } else {
              if (!wrongLetters.includes(letter)) {
                setWrongLetters(currentLetters => [...currentLetters, letter]);
              } else {
                show(setShowNotification);
              }
            }
        }
      }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <div className="App">
        <Header />
        <div className="game-container">
           <Figure wrongLetters={wrongLetters} />
           <WrongLetters wrongLetters={wrongLetters}/>
           <Word selectedWord={selectedWord} correctLetters={correctLetters} />
           <Notification showNotification={showNotification}/>
        </div>
        <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={playable} />
        <Footer />
    </div>
  );
}

export default App;
