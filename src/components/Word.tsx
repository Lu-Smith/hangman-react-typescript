import React from 'react';

interface WordProps
{
    selectedWord: string;
    correctLetters: string[] | never;
}

const Word = ({selectedWord, correctLetters}: WordProps) => {
  return (
    <div className="word">
        {selectedWord.split('').map((letter: string, i: number) => {
            return (
                        <span className="letter" key={i}>
                           {correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )  
                }
			)
        }
    </div>
  )
}

export default Word