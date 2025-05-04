"use client";

import { createContext, useContext, useState } from "react";


const ShoppingCartContext = createContext();

export function ShoppingCartProvider({children}){
    const [cart, setCart] = useState([]);

    const addToCart = (product) => setCart([...cart, product]);
    return (
        <ShoppingCartContext.Provider value={{cart, addToCart}}>{children}</ShoppingCartContext.Provider>
    )
}

export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}