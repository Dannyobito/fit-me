import SHOP_DATA from "./ShopData";
const INITIAL_STATE = {
    collections: SHOP_DATA,
    collectionId: ''
};
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case('SET_SELECTED_COLLECTION') :
            return {
                ...state,
                collectionId: action.payload
            }
        default:
            return state;
    }
}
export default shopReducer;