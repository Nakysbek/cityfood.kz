import React, {useEffect, useState} from 'react';
import {Categories} from "../PizzaBlock/Categories";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {Skeleton} from "../PizzaBlock/Skeleton";
import {Sort} from "../PizzaBlock/Sort";
import {Pagination} from "../Pagination/PaginationType";

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

export type ListType = {
    name: string
    sortProperty: string
}

export const Home = ({searchValue}: {searchValue: string }) => {

    const [items, setItems] = useState<PizzaType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [categoryId, setCategoryId] = useState<number>(0)
    const [sort, setSort] = useState<ListType>({name: 'популярности', sortProperty: 'rating'})
    const [currentPage, setCurrentPage] = useState<number>(1)

    const category = categoryId > 0 ? `${categoryId}`: '';
    const sortBy = sort ? `${sort.sortProperty}` : '';
    const searchBy = searchValue ? `${searchValue}` : ''


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://646e692e9c677e23218ba211.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=desk&title=${searchBy}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItems(res)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={(i) => setCategoryId(i)}/>
                <Sort sort={sort} setSort={(value) => setSort(value)}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((e, i) => <Skeleton key={i}/>)
                    : items.map((item) => <PizzaBlock key={item.id} {...item}/>)
                }
            </div>

            <Pagination currentPage={currentPage} setCurrentPage={(number) => setCurrentPage(number)}/>

        </div>
    );
};

