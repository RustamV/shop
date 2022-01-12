import { useSelector } from "react-redux";
import { ProductCard } from "..";
import styles from "./index.module.scss";

const Shop = () => {
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);

    return (
        <div className={styles.shop}>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                products.map((product) => <ProductCard key={product.id} product={product} />)
            )}
        </div>
    );
};

export default Shop;
