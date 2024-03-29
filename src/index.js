import React from 'react';
import reduxStore from "./redux/redux-store"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

window.store = reduxStore

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter >
            <Provider store={reduxStore}>
            <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);




