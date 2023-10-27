import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from './shopping-bag.svg'

import './CartIcon.scss';
const CartIcon = ({toggleCartHidden,itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
  )
}
const mapStateToProps = ({cart:{cartItems}}) =>({
  itemCount : cartItems.reduce(((accumumulator,cartItem) => accumumulator + cartItem.quantity),0)
})
const mapDispatchToProps = dispatch =>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)