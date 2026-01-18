export const wishlistReducer=(state,{type,payload})=>{
    switch(type){
        case'ADD_TO_WISHLIST':
        return{
            ...state,
            wishlist:[...state.wishlist,payload.product]
        }
        default:
            return state
    }
}