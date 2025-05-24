import React from 'react'
import '../components/styles.scss';
import Logo from '../../public/assets/images/logo.svg'
import PlayIcon from '../../public/assets/images/icon-play.svg'
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className='main-menu-container'>
     <div className="top"><img className='logo' src={Logo} alt="Logo" /></div>
     <div className='bottom'>
         <Link to='/category'><button className='play-btn'><img src={PlayIcon} alt="Play Icon" /></button></Link>
         <Link to='/howtoplay'><button className='how-to-play-btn'>how to play</button></Link>
     </div>
    </div>
  )
}

export default MainMenu