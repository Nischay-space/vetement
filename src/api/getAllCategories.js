import axios from "axios";
const BaseUrl='https://api.escuelajs.co/api/v1'

export const getAllCategories=async ()=>{
    const Url=`${BaseUrl}/categories`
    try{
        const {data}=await axios.get(Url)
        return data;
        
    }catch(err){
        return err
    }
}