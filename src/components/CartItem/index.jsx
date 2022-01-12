import { Button, Controls } from "..";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/slices/product";
import styles from "./index.module.scss";

const CartItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteFromCart({ product, flag: "all" }));
    };

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
            <div className={styles.right}>
                <Controls product={product} />
                <Button onClick={handleDelete}>Delete</Button>
            </div>
        </div>
    );
};

export default CartItem;
