import { useCart } from "../../context/cart-context"
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishlist } from "../../utils/findProductInWishlist";
import{ useNavigate} from "react-router-dom"
import { useWishlist } from "../../context/wishlist-context";
export const ProductCard = ({ product }) => {
    const {cart,cartDispatch}=useCart();
    const {wishlist,wishlistDispatch}=useWishlist();
    const navigate=useNavigate();
    const isProductInCart=findProductInCart(cart,product.id)
    const isProductinWIshlist=findProductInWishlist(wishlist,product.id)
    const onCartClick=()=>{
        !isProductInCart?
        cartDispatch({
            type:'ADD_TO_CART',
            payload:{ product }
        }):navigate('/cart')
    }
    const onWishlistClick=()=>{
        !isProductinWIshlist?
        wishlistDispatch({
            type:'ADD_TO_WISHLIST',
            payload:{product}
        }):navigate('/wishlist')
    }

    return (
        <div className="card card-vertical d-flex direction-column relative shadow">
            <div className="card-image-container">
                <img className="card-image" src={product.images[0]} alt="shoes" />
            </div>
            <div className="card-details">
                <div className="card-des">{product.title}</div>
                <div className="card-description">

                    <p className="card-price">
                        Rs.{product.price}
                    </p>
                </div>
                <div className="cta-btn">
                    <button onClick={()=>onWishlistClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-icons-outlined">
                            favorite
                        </span>
                        {
                                isProductinWIshlist? 'Go to Wishlist': 'Add to Wishlist'
                            }
                    </button>
                    <button onClick={()=>onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                        <span className="material-icons-outlined">
                            {
                                isProductInCart? 'shopping_cart_checkout': ' shopping_cart'
                            }
                           
                        </span>
                       {
                        isProductInCart? 'Go to Cart':'Add To Cart'
                       }
                    </button>
                </div>
            </div>
        </div>
    )
}