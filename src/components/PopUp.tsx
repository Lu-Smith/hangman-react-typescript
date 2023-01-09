import React, {useEffect} from 'react';
import { checkWin } from '../helpers/helpers';

interface PopUpProps {
  wrongLetters: string[];
  correctLetters: string[];
  selectedWord: string;
  setPlayable: (playable: boolean) => void;
  playAgain: () => void;

}

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}:PopUpProps) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
 

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won 😄';
    playable = false;
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'You lost 😔';
    finalMessageRevealWord = `... the word was: ${selectedWord}`;
    playable = false;
  } else {
       playable = true;
  }

  useEffect(() => setPlayable(playable));
  
  return (
    <div className="popup-container">
        <div className="popup" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
        </div>
  </div>
  )
}

export default PopUp