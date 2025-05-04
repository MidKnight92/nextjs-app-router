"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./siteHeader.module.css";
import logo from "../../public/images/logo.png";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function SiteHeader(){
    const {cart} = useShoppingCart();
    return (
        <div className={styles.container}>
            <Image src={logo} alt="" height="53" width="135" />
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            <div className={styles.cart}>
                Cart
                <div className={styles.cartCount}>
                    {cart.length}
                </div>
            </div>
        </div>
    );
}