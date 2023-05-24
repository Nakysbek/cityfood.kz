import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Content} from "./components/content/Content";
import pizzas from './assets/pizzas.json'


export function App() {


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Content pizzas={pizzas}/>
            </div>
        </div>
    );
}

