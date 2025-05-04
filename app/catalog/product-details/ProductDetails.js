import Link from "next/link";
import styles from "./productDetails.module.css";
import Image from "next/image";
import BuyButton from "./BuyButton";

export default function ProductDetail({_id, imageName, price, title}){
    return (
        <div className={styles.product}>
            <Link href={`/catalog/product-info/${_id}`}>
                <Image src={`/images/albums/${imageName}`} alt={title} width={325} height={325} /> 
                <div>{title}</div>
                <div>{new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD",}).format(price)}</div>
            </Link>
            <BuyButton product={{_id, imageName, price, title}}/>
        </div>
    )
}