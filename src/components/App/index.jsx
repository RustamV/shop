import AppRoutes from "../../routes";
import { Container, Header } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/product";
const LSName = "shop";

const App = ({ dealers }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storage = localStorage.getObj(LSName) ?? [];
        dispatch(fetchProducts({ dealers, storage }));
    }, [dispatch, dealers]);

    return (
        <Container>
            <Header />
            <AppRoutes />
        </Container>
    );
};

export default App;
