import path from "path";
import styles from "./catalog.module.css"
import ProductDetail from "./product-details/ProductDetails";
import { readFile } from "fs/promises";

export const revalidate = 1800;

const getProducts = async () => {
    const data = await readFile("/workspaces/nextjs-app-router/app/catalog/products.json", "utf-8");
    const json = JSON.parse(data);
    return json
}

export default async function Catalog(){
    const products = await getProducts();

    return (
        <div>
            <ul className={styles.products}>
                {products.map((product, idx) => (
                    <li key={idx}>
                        <ProductDetail { ...product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}