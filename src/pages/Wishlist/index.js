import { Navbar } from "../../components/Navbar"
import { useWishlist } from "../../context/wishlist-context"
import { useNavigate } from "react-router-dom"
import { ProductCard } from "../../components/ProductCard"

export const Wishlist=()=>{
    const{wishlist}=useWishlist();
    const navigate=useNavigate();
    return(
        <>
        <Navbar/>
        <main className="flex flex-col pt-6 items-center">
            {
                wishlist?.length>0?(
                    <>
                    <h2 className="text-3xl">My Wishlist</h2>
                    <div className="flex gap-8">
                        <div className="flex  pt-4 gap-4">
                            {
                                wishlist?.length>0 && wishlist.map(product=><ProductCard key={product.id} product={product}/>)
                            }
                        </div>
                    </div>
                    </>
                ):<div>
                    <h2 className="text-xl hover:cursor-pointer">Wishlist is empty</h2>
                    <p className="text-xl underline hover:cursor-pointer text-[rgb(22,101,52)] items-center" onClick={()=>navigate('/')}>Add products to wishlist</p>
                    </div>
                
            }

        </main>
        </>
    )
}