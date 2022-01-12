import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    count: 0,
    loading: true
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", async (queryData) => {
    const { dealers, storage } = queryData;
    const dealersQuery = dealers ? "?dealers=" + dealers.join(",") : "";
    const { data } = await axios.get(`https://murmuring-tor-81614.herokuapp.com/api/goods/${dealersQuery}`);
    return { data, storage };
});

const product = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart(state, action) {
            const searchingProduct = state.products.find((item) => item.id === action.payload.id);
            if (searchingProduct) {
                if (searchingProduct.inCart === 0) {
                    state.count++;
                }
                searchingProduct.inCart++;
            }
        },
        deleteFromCart(state, action) {
            const { product, flag } = action.payload;
            const searchingProduct = state.products.find((item) => item.id === product.id);

            if (searchingProduct) {
                if (flag === "all") {
                    searchingProduct.inCart = 0;
                    state.count--;
                } else {
                    if (searchingProduct.inCart === 1) {
                        state.count--;
                    }
                    searchingProduct.inCart--;
                }
            }
        },
        deleteAllFromCart(state) {
            state.products = state.products.map((item) => ({ ...item, inCart: 0 }));
            state.count = 0;
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            const { data, storage } = action.payload;
            const newProducts = [...data].map((item, index) => {
                let newInCartValue = 0;
                let storageProduct = storage.find((product) => product.name === item.name);
                if (storageProduct) {
                    newInCartValue = storageProduct.inCart;
                }
                return { ...item, id: index, inCart: newInCartValue };
            });

            state.products = newProducts;
            state.count = newProducts.reduce((acc, cur) => {
                if (cur.inCart > 0) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            state.loading = false;
        }
    }
});

export const { addToCart, deleteFromCart, deleteAllFromCart } = product.actions;
const { reducer } = product;

export default reducer;
