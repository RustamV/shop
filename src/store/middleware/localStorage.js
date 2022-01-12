const LSName = "shop";

const localStorageMW = () => (next) => (action) => {
    const result = next(action);
    const LSCart = localStorage.getObj(LSName) ?? [];
    const findProduct = (product) => product.name === result.payload.name;

    switch (result.type) {
        case "product/addToCart": {
            const addition = LSCart.find(findProduct);
            if (addition) {
                addition.inCart++;
            } else {
                LSCart.push({ name: result.payload.name, inCart: result.payload.inCart + 1 });
            }
            localStorage.setObj(LSName, LSCart);
            break;
        }
        case "product/deleteFromCart": {
            let newLSCart = LSCart;
            const deletion = newLSCart.find(findProduct);
            if (deletion.inCart === 1) {
                newLSCart = newLSCart.filter((product) => product.name !== result.payload.name);
            } else {
                deletion.inCart--;
            }
            localStorage.setObj(LSName, newLSCart);
            break;
        }
        case "product/deleteAllFromCart": {
            localStorage.setObj(LSName, []);
            break;
        }
        default: {
            break;
        }
    }

    return result;
};

export default localStorageMW;
