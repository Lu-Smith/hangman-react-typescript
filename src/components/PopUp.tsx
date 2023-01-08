import React from 'react';

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
  return (
    <div className="popup-container">
        <div className="popup">
            <h2></h2>
            <h3></h3>
            <button>Play Again</button>
        </div>
  </div>
  )
}

export default PopUp