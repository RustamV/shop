import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CartItem } from "..";
import { deleteAllFromCart } from "../../store/slices/product";
import styles from "./index.module.scss";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const count = useSelector((state) => state.product.count);
    const summary = useMemo(() => {
        return products
            .reduce((sum, product) => {
                if (product.inCart === 0) return sum;
                return sum + product.inCart * product.price;
            }, 0)
            .toFixed(2);
    }, [products]);

    const hadleDeleteAll = () => {
        dispatch(deleteAllFromCart());
    };

    return (
        <div className={styles.cart}>
            {count === 0 ? (
                <h3 className={styles.empty}>Cart is empty</h3>
            ) : (
                <>
                    <div className={styles.head}>
                        <Button onClick={hadleDeleteAll}>Delete all</Button>
                        <span>Summary: {summary}</span>
                    </div>
                    {products
                        .filter((item) => item.inCart > 0)
                        .map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                </>
            )}
        </div>
    );
};

export default Cart;
