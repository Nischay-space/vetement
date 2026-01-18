import { createContext, useContext,useReducer,Children } from "react"
import{wishlistReducer} from '../reducers/wishlistReducer'
const WishlistContext=createContext();
const WishlistProvider=({children})=>{
    const initialState={
        wishlist:[]
    }
    const[{wishlist},wishlistDispatch]=useReducer(wishlistReducer,initialState);

    return(
        <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}
const useWishlist=()=>useContext(WishlistContext);
export{WishlistProvider,useWishlist}