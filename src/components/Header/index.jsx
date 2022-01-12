import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button } from "..";
import styles from "./index.module.scss";

const headerStates = [
    { id: 0, title: "Shop", buttonTitle: "Cart", buttonLink: "/cart" },
    { id: 1, title: "Cart", buttonTitle: "Back to shop", buttonLink: "/" }
];

const Header = () => {
    const { pathname } = useLocation();
    const [headerState, setHeaderState] = useState({
        title: "",
        buttonTitle: "",
        buttonLink: ""
    });
    const count = useSelector((state) => state.product.count);

    useEffect(() => {
        if (pathname === "/") {
            setHeaderState({
                title: headerStates[0].title,
                buttonTitle: headerStates[0].buttonTitle,
                buttonLink: headerStates[0].buttonLink
            });
        } else {
            setHeaderState({
                title: headerStates[1].title,
                buttonTitle: headerStates[1].buttonTitle,
                buttonLink: headerStates[1].buttonLink
            });
        }
    }, [pathname]);

    return (
        <div className={styles.header}>
            <h2 className={styles.logo}>{headerState.title}</h2>
            <Link to={headerState.buttonLink}>
                <Button className={styles.button}>
                    {headerState.buttonTitle}
                    {headerState.buttonLink === "/cart" && <span className={styles.badge}>{count}</span>}
                </Button>
            </Link>
        </div>
    );
};

export default Header;
