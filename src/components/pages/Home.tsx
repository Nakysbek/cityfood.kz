import React, {useEffect} from 'react';
import {RootState} from "../../redux/store";
import qs from 'qs';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Categories} from "../PizzaBlock/Categories";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {Skeleton} from "../PizzaBlock/Skeleton";
import {Sort} from "../PizzaBlock/Sort";
import {Pagination} from "../Pagination/PaginationType";
import {setIsLoading, setItems} from "../../redux/slices/filterSlice";

export const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {categoryId, sort, currentPage, isLoading, searchValue, items} = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        dispatch(setIsLoading(true))

        const category = categoryId > 0 ? `${categoryId}` : '';
        const sortBy = sort ? `${sort.sortProperty}` : '';
        const searchBy = searchValue ? `${searchValue}` : '';
        const page = currentPage ? `${currentPage}` : '';

        axios
            .get(
                `https://646e692e9c677e23218ba211.mockapi.io/items?category=${category}&title=${searchBy}&page=${page}&limit=4&sortBy=${sortBy}&order=desk`
            )
            .then((res) => {
                dispatch(setItems(res.data))
                dispatch(setIsLoading(false))
            })
    }, [categoryId, sort, searchValue, currentPage])

    useEffect(() => {
        const queryString = qs.stringify({
            sort: sort.sortProperty,
            categoryId,
            searchValue,
            currentPage,
        })
        navigate(`?${queryString}`)
    }, [categoryId, sort, searchValue, currentPage])


    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>

            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? [...new Array(8)].map((e, i) => <Skeleton key={i}/>)
                    : items.map((item) => <PizzaBlock key={item.id} {...item}/>)
                }
            </div>

            <Pagination/>

        </div>
    );
};

