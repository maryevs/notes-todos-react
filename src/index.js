import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./components/App";
import {store} from './store/store';


ReactDOM.render(
        <App store={store} />,
    document.getElementById('root')
);
