import { useCart } from "../../context/cart-context"
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
export const PriceDetails = () => {
    const {cart}=useCart();
    const TotalAmount=getTotalCartAmount(cart);
    const deliverycharge=50;
    return(
        <div className="w-[400px] bg-[#fafafa] p-4">
            <p className="text-2xl border-b p-2">Price Details</p>
            <div className="flex flex-col gap-5 border-b p-2">
                <div className="flex">
                    <p>Price for ({cart.length}) items </p>
                    <p className="ml-auto">Rs. {TotalAmount}</p>
                </div>
                <div className="flex">
                    <p>Delivery Charges</p>
                    <p className="ml-auto">Rs. {deliverycharge}</p>
                </div>
            </div>
            <div className="flex border-b p-2 ">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. {TotalAmount + deliverycharge}</p>
            </div>
            <div className="p-2">
                 <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Place Order</button>
            </div>
        </div>
    )
}