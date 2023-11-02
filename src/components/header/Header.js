import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';


import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './Header.scss';
import Logo from './logo.png';

const Header = ({currentUser, hidden}) => {
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
        {
          hidden ? null : <CartDropdown />
        }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
// const mapStateToProps = state =>({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden

// })
// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) =>({
//   currentUser,
//   hidden

// })
export default connect(mapStateToProps)(Header);