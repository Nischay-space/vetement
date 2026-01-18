import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import {useEffect,useState } from "react";
import { getAllProducts } from "../../api/getAllProducts"
import {getAllCategories} from "../../api/getAllCategories"
import { getProductsByCategories } from "../../utils/getProductsByCategories";
import { useCart } from "../../context/cart-context";
export const Home=()=>{
    const[products,setProducts]=useState([]);
    const [categories,setCategories]=useState([]);
    const[selectedCategory,setSelectedCategory]=useState("All")
    const {cart}=useCart();
    console.log({cart});
    

    useEffect(()=>{
        (async()=>{
            const products=await getAllProducts();
            const categories=await getAllCategories();
            const updatedCategories=[...categories,{id:'1a' , name:"All"}]
            setProducts(products);
            setCategories(updatedCategories);
        })()
    },[])

    const onCategoryClick=(category)=>{
        setSelectedCategory(category)
    }
    const filterByCategories=getProductsByCategories(products,selectedCategory)


    return(
        <>
        <Navbar />
        <main className="flex flex-col flex-wrap gap-8 pt-8 ">
            <div className="flex gap-4 justify-center">
            {
                categories?.length>0 && categories.map(category=><div className="bg-green-400 font-semibold rounded-full p-1 hover:cursor-pointer " onClick={()=>onCategoryClick(category.name)}>{category.name}</div>)
            }
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
            {
                filterByCategories?.length>0 ?  filterByCategories.map(product=><ProductCard key={product.id} product={product}/>):<h2>No Products Found,Please try another category</h2>
            }
            </div>
        </main>
        </>
    )
}