import React from 'react';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let render = (state, dispatch)  =>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter >
                <App state = {state} dispatch = {dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render(store.getState(), store.dispatch);


store.subscribe(render)
