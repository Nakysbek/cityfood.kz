import React, {createContext, useState} from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Home} from "./components/pages/Home";
import {NotFound} from "./components/pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/pages/Cart";

export const SearchContext = createContext({})

export function App() {

    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>

                <Header/>

                <div className="content">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                    </Routes>
                </div>

            </SearchContext.Provider>
        </div>
    );
}

