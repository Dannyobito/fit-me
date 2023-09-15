import React from 'react';
import Logo from './logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <Link className='logo-container' to={'/'}>
            <img src={Logo} alt='' width={100} height={100}/>
        </Link>
        <div className='options'>
            <Link className='option' to={'/shop'}>SHOP</Link>
            <Link className='option' to={'/contact'}>CONTACT</Link>

        </div>
    </div>
  )
}

export default Header;