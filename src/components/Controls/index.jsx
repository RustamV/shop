import classNames from "classnames";
import { useDispatch } from "react-redux";
import { Button } from "..";
import { addToCart, deleteFromCart } from "../../store/slices/product";
import styles from "./index.module.scss";

const Controls = ({ direction, product }) => {
    const dispatch = useDispatch();
    const controlsClassnames = classNames(styles.controls, {
        [styles.vertical]: direction === "vertical"
    });

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart(product));
    };

    return (
        <div className={controlsClassnames}>
            <Button onClick={handleDeleteFromCart}>-</Button>
            <span>{product.inCart}</span>
            <Button onClick={handleAddToCart}>+</Button>
        </div>
    );
};

export default Controls;
