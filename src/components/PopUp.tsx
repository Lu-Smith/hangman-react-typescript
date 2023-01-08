import React from 'react';

interface PopupProps {
  wrongLetters: string[];
  correctLetters: string[];
  selectedWord: string;
  setPlayable: boolean;

}

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable}:PopupProps) => {
  return (
    <div className="popup-container">
        <div className="popup">
            <h2 id="final-message"></h2>
            <h3 id="final-message-reveal-word"></h3>
            <button id="play-button">Play Again</button>
        </div>
  </div>
  )
}

export default PopUp