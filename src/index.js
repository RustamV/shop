import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
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
            <HashRouter basename="/">
                <App dealers={dealers} />
            </HashRouter>
        </Provider>,
        document.getElementById("root")
    );
};

window.app = {
    start
};
