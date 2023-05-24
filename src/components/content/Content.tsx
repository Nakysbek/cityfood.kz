import React from 'react';
import {Categories} from "./Categories";
import {Sort} from "./Sort";
import {PizzaBlock} from "./PizzaBlock";


export type PizzaType = {
    "id": number,
    "imageUrl": string,
    "title": string,
    "types": number[]
    "sizes": number[]
    "price": number,
    "category": number,
    "rating": number,
}

export type PizzaListType = {
    pizzas: PizzaType[]
}

export const Content = ({pizzas}: PizzaListType) => {

    return (
        <div className="content">

            <div className="container">

                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>

                <h2 className="content__title">Все пиццы</h2>

                <div className="content__items">
                    {pizzas.map((pizza: PizzaType, index: number) =>
                        <PizzaBlock key={index}
                                    {...pizza}
                        />
                    )}
                </div>

            </div>

        </div>
    );
};

