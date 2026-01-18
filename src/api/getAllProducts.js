import axios from "axios";
const BaseUrl='https://api.escuelajs.co/api/v1'

export const getAllProducts=async ()=>{
    const Url=`${BaseUrl}/products`
    try{
        const {data}=await axios.get(Url)
        return data;
        
    }catch(err){
        return err
    }
}