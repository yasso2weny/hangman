import React from "react";

const Keyboard = ({ onLetterClick, guessedLetters, correctLetters }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      onLetterClick(letter);
    }
  };

  const getLetterClass = (letter) => {
    if (!guessedLetters.includes(letter)) {
      return "kb-letter-default";
    }
    return "kb-letter-disabled";
  };

  return (
    <div className="empty-letters-container">
      {letters.map((letter) => (
        <div
          key={letter}
          className={getLetterClass(letter)}
          onClick={() => handleLetterClick(letter)}
          style={{
            cursor: guessedLetters.includes(letter) ? "default" : "pointer",
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
