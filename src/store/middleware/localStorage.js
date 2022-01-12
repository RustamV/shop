const LSName = "shop";

const localStorageMW = () => (next) => (action) => {
    const result = next(action);
    const LSCart = localStorage.getObj(LSName) ?? [];

    switch (result.type) {
        case "product/addToCart": {
            const addition = LSCart.find((product) => product.name === result.payload.name);
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
            const { product: newProduct, flag } = result.payload;
            const deletion = newLSCart.find((product) => product.name === newProduct.name);
            if (deletion.inCart === 1 || flag === "all") {
                newLSCart = newLSCart.filter((product) => product.name !== newProduct.name);
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
