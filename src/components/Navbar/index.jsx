import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";


export const Navbar = () => {
    const navigate=useNavigate();
    const[isAccountDropDownOpen,setIsAccountDropDownOpen]=useState(false);
    const {token,loginDispatch}=useLogin();

    const onLoginClick=()=>{
        if(!token?.access_token){

            navigate('/auth/login')
        }else{
            loginDispatch({
                type:"LOGOUT"
            })
            navigate('auth/login')
        }
    }
  
    return (
        <header className="flex bg-green-800 px-5 py-3 items-center text-slate-200 ">
            <div>
                <h1 onClick={()=>navigate('/')} className="text-5xl hover:cursor-pointer">Vetement</h1>
            </div>
            <nav className="flex ml-auto gap-5 ">
                <span onClick={()=>navigate('/cart')} className="material-icons-outlined text-3xl  hover:cursor-pointer">
                    shopping_cart
                </span>
                <span onClick={()=>navigate('/wishlist')} className="material-icons-outlined text-3xl  hover:cursor-pointer ">
                    favorite
                </span>
                <div className="relative">
                     <span onClick={()=>setIsAccountDropDownOpen(!isAccountDropDownOpen)} className="material-icons-outlined text-3xl  hover:cursor-pointer">
                    account_circle
                </span>
                { isAccountDropDownOpen &&  <div className="absolute bg-green-600 rounded-full p-1">
                    <button className="" onClick={onLoginClick}>
                    {
                        token?.access_token? "Logout":'Login'
                    }
                    </button>

                    </div>

                }
               
                    </div>  
               
            </nav>
        </header>
    )
}