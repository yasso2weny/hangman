import React from "react";
import "./GameOverModal.scss";
import { Link } from "react-router-dom";

const GameOverModal = ({ isWin, currentWord, onPlayAgain, category }) => {
  return (
    <div className="game-over-modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2 className="modal-title">{isWin ? "You Win" : "You Lose"}</h2>
        {!isWin && (
          <p className="word-reveal">
            The word was: <span className="word">{currentWord}</span>
          </p>
        )}
        <div className="button-group">
          <button onClick={onPlayAgain} className="btn">
            play again
          </button>
          <Link to="/category">
            <button className="btn">new category</button>
          </Link>
          <Link to="/">
            <button className="quit-btn">quit game</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;
