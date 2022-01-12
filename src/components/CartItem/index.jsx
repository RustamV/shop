import { Controls } from "..";
import styles from "./index.module.scss";

const CartItem = ({ product }) => {
    return (
        <div className={styles.product}>
            <img
                className={styles.image}
                src={"https://murmuring-tor-81614.herokuapp.com" + product.image}
                alt=""
                height="100px"
                width="100px"
            />
            <div className={styles.info}>
                <h5 className={styles.title}>{product.name}</h5>
                <p className={styles.price}>Price: {product.price}$</p>
            </div>
            <Controls product={product} direction="vertical" />
        </div>
    );
};

export default CartItem;
