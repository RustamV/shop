import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { addToCart } from "../../store/slices/product";
import Controls from "../Controls";
import styles from "./index.module.scss";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={"https://murmuring-tor-81614.herokuapp.com" + product.image}
                alt=""
                height="200px"
                width="200px"
            />
            <div className={styles.body}>
                <h5 className={styles.title}>{product.name}</h5>
                <p className={styles.price}>Price: {product.price}$</p>
                {product.inCart === 0 ? (
                    <Button onClick={handleAddToCart} wide>
                        Add to cart
                    </Button>
                ) : (
                    <Controls product={product} />
                )}
            </div>
        </div>
    );
};

export default ProductCard;
