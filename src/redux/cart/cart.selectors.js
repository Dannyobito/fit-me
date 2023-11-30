import { createSelector } from "reselect";
//input selector, outputselector
//input selector
const selectCart = state => state.cart;

//outputselector
export const selectCartHidden = createSelector(
    [selectCart], (cart) => cart.hidden
)
export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
)
export const selectCartItemsCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce(((accumumulator,cartItem) => accumumulator + cartItem.quantity),0)
    
)
export const selectCartTotal = createSelector(
    [selectCartItems], cartItems => cartItems.reduce(((accumumulator,cartItem) => {
        return accumumulator + (cartItem.quantity * cartItem.price)}),0)
)
// arg 1 - collection/ array of input selectors, arg-2 function that returnss value
