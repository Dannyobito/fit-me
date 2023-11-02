import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './CartDropdown.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, dispatch}) => {
  return (
    <div className='cart-dropdown'>
       <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          : <span className='empty-message'>Your cart is empty</span>
        }
       </div>
       <Link to={'/checkout'}><Button onClick={()=>{dispatch(toggleCartHidden())}}>GO TO CHECKOUT</Button></Link>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})
export default connect(mapStateToProps)(CartDropdown)