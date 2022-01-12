import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components";
import "./index.css";

Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key));
};

const start = ({ dealers }) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App dealers={dealers} />
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
};

window.app = {
    start
};
