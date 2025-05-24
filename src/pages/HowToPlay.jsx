import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HowToPlay = () => {
  return (
    <>
    <Navbar />
        <div className='htp-container'>
        <div className='htp-card'>
            <p className="htp-num">01</p>
            <p className="htp-title">choose a category</p>
            <p className="htp-description">First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
            </div>
        <div className='htp-card'>
            <p className="htp-num">02</p>
            <p className="htp-title">Guess letters</p>
            <p className="htp-description">Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</p>
            </div>
        <div className='htp-card'>
            <p className="htp-num">03</p>
            <p className="htp-title">Win or lose</p>
            <p className="htp-description">You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
            </div>
    </div>
    </>
  )
}

export default HowToPlay