import React from 'react'
import BackIcon from '../../public/assets/images/icon-back.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    let headerText = '';
    if (location.pathname === '/category') {
        headerText = 'Pick a Category';
    } else if (location.pathname === '/howtoplay') {
        headerText = 'How to Play';
    }

  return (
    <div className='navbar'>
        <Link to="/"><button className='back-btn'><img src={BackIcon} alt="" /></button></Link>
        <h1 className='header'>{headerText}</h1>
    </div>
  )
}

export default Navbar