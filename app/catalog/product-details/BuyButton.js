"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function BuyButton(){
    const {addToCart} = useShoppingCart();
    return (
        <button onClick={addToCart}>
            Buy
        </button>
    )
}