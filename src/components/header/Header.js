import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import Logo from './logo.png';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';
import { Link } from 'react-router-dom';
const Header = ({currentUser}) => {
  return (
    <div className='header'>
        <Link className='logo-container' to={'/'}>
            <img src={Logo} alt='' width={100} height={100}/>
        </Link>
        <div className='options'>
            <Link className='option' to={'/shop'}>SHOP</Link>
            <Link className='option' to={'/contact'}>CONTACT</Link>
          {
            currentUser?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            : <Link className='option' to={'/signin-signup'}>SIGN IN</Link>
          }
          <CartIcon />
        </div>
        <CartDropdown />
    </div>
  )
}
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);