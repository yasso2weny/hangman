import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeartIcon from "../../public/assets/images/icon-heart.svg";
import Modal from "../components/Modal/Modal";
import Keyboard from "../components/Keyboard";
import GameOverModal from "../components/GameOverModal/GameOverModal";

const Ingame = () => {
  const { category } = useParams();
  const [currentWord, setCurrentWord] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const maxWrongGuesses = 8;

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryName = Object.keys(data.categories).find(
          (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category
        );

        if (categoryName && data.categories[categoryName]) {
          setCategoryTitle(categoryName);
          const categoryItems = data.categories[categoryName];
          const randomIndex = Math.floor(Math.random() * categoryItems.length);
          const selectedWord = categoryItems[randomIndex].name.toUpperCase();
          setCurrentWord(selectedWord);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category]);

  const handleLetterGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameOver) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (currentWord.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  // Check for win condition
  useEffect(() => {
    if (currentWord && correctLetters.length > 0) {
      const uniqueLetters = [
        ...new Set(currentWord.replace(/\s+/g, "").split("")),
      ];
      const hasWon = uniqueLetters.every((letter) =>
        correctLetters.includes(letter)
      );

      if (hasWon) {
        setIsWin(true);
        setGameOver(true);
        document.body.classList.add("active-modal");
      }
    }
  }, [correctLetters, currentWord]);

  // Check for lose condition
  useEffect(() => {
    if (wrongGuesses >= maxWrongGuesses) {
      setIsWin(false);
      setGameOver(true);
      document.body.classList.add("active-modal");
    }
  }, [wrongGuesses]);

  const handlePlayAgain = () => {
    // Reset game state
    setGuessedLetters([]);
    setCorrectLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setIsWin(false);
    document.body.classList.remove("active-modal");

    // Select new word from same category
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryName = Object.keys(data.categories).find(
          (cat) => cat.toLowerCase().replace(/\s+/g, "-") === category
        );

        if (categoryName && data.categories[categoryName]) {
          const categoryItems = data.categories[categoryName];
          const randomIndex = Math.floor(Math.random() * categoryItems.length);
          const selectedWord = categoryItems[randomIndex].name.toUpperCase();
          setCurrentWord(selectedWord);
        }
      });
  };

  const renderLetterBoxes = () => {
    if (!currentWord) return null;

    return currentWord.split("").map((letter, index) => {
      if (letter === " ") {
        return (
          <div key={index} className="letter-space">
            &nbsp;
          </div>
        );
      }

      const isGuessed = correctLetters.includes(letter);
      return (
        <div
          key={index}
          className={isGuessed ? "letter-active" : "letter-disabled"}
        >
          {isGuessed ? letter : ""}
        </div>
      );
    });
  };

  const healthPercentage = Math.max(
    0,
    ((maxWrongGuesses - wrongGuesses) / maxWrongGuesses) * 100
  );

  return (
    <>
      <div className="game-container">
        <div className="ingame-navbar">
          <div className="left">
            <Modal></Modal>
            <h1 className="ingame-header">{categoryTitle}</h1>
          </div>
          <div className="right">
            <div className="meter">
              <span
                className="bar"
                style={{ width: `${healthPercentage}%` }}
              ></span>
            </div>
            <img src={HeartIcon} alt="Heart Icon" />
          </div>
        </div>
        <div className="empty-letters-container">{renderLetterBoxes()}</div>
      </div>
      <Keyboard
        onLetterClick={handleLetterGuess}
        guessedLetters={guessedLetters}
        correctLetters={correctLetters}
      />
      {gameOver && (
        <GameOverModal
          isWin={isWin}
          currentWord={currentWord}
          onPlayAgain={handlePlayAgain}
          category={category}
        />
      )}
    </>
  );
};

export default Ingame;
