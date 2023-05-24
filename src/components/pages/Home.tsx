import React from 'react';
import {Categories} from "../PizzaBlock/Categories";
import {Sort} from "../PizzaBlock/Sort";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {Skeleton} from "../PizzaBlock/Skeleton";

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
    isLoading: boolean
}

export const Home = ({pizzas, isLoading}: PizzaListType) => {

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((e, i) => <Skeleton key={i}/>)
                    : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza}/>)
                }
            </div>
        </>
    );
};

