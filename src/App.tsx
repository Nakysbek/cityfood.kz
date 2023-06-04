import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Home} from "./components/pages/Home";
import {NotFound} from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/pages/Cart/Cart";

export function App() {

    return (
        <div className="wrapper">
                <Header/>

                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </div>
        </div>
    );
}

