const SET_SELECTED_COLLECTION = 'SET_SELECTED_COLLECTION';
export const setSelectedCollection = collectionId =>({
    type: SET_SELECTED_COLLECTION,
    payload: collectionId
})