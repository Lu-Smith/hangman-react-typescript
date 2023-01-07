import React from 'react';

interface wrongLettersProps {
  wrongLetters: string[];
}

const WrongLetters = ({wrongLetters}: wrongLettersProps) => {
  return (
      <div className="wrong-letters-container">
        <div>
        {wrongLetters.length > 0 && 'Wrong letters'}
        <div>
        {wrongLetters
          .map((letter, i: number) => <span key={i}>{letter} </span> )}
        </div>
        </div>
      </div>
  )
}

export default WrongLetters