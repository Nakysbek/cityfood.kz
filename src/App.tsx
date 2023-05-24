import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Home, PizzaType} from "./components/pages/Home";
import {NotFound} from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/pages/Cart";


export function App() {

    const [items, setItems] = useState<PizzaType[]>([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://646e692e9c677e23218ba211.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="App">
            <div className="wrapper">

                <Header/>

                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home pizzas={items} isLoading={isLoading}/>}/>
                            <Route path='*' element={<NotFound/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                        </Routes>
                    </div>
                </div>

            </div>
        </div>
    );
}

