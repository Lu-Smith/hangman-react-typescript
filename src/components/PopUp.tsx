import React, {useEffect} from 'react';
import { checkWin } from '../helpers/helpers';

interface PopUpProps {
  wrongLetters: string[];
  correctLetters: string[];
  selectedWord: string;
  setPlayable: boolean;

}

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable}:PopUpProps) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won 😄';
    playable = false;
  } else {
    finalMessage = 'You lost 😔';
    finalMessageRevealWord = '... the word was: ${selectedWord';
    playable = false;
  }

  useEffect(() => setPlayable(playable));
  
  return (
    <div className="popup-container">
        <div className="popup" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <h2></h2>
            <h3></h3>
            <button>Play Again</button>
        </div>
  </div>
  )
}

export default PopUp