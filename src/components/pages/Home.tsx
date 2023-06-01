import React, {useEffect, useRef} from 'react';
import {RootState} from "../../redux/store";
import qs from 'qs';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {Categories} from "../PizzaBlock/Categories";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {Skeleton} from "../PizzaBlock/Skeleton";
import {Sort, sortList} from "../PizzaBlock/Sort";
import {Pagination} from "../Pagination/PaginationType";
import {setIsLoading, setItems, setFilters, initialState} from "../../redux/slices/filterSlice";

export const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const {
        categoryId,
        sort,
        currentPage,
        isLoading,
        searchValue,
        items
    } = useSelector((state: RootState) => state.filter)

    const fetchPizzas = () => {
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
    }

    // Проверка на первый рендер, если первого рендера не было то в URL-параметры ничего не вшиваем, если был
    // рендер и изменились параметры то вшиваем данные с параметра в редакс
    useEffect(() => {
        // нужно решить вопрос с двойным рендером так как у меня дважды рендерится и isMounted сразу становится правдой
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sort, searchValue, currentPage])


    // Если был первый рендер то проверяем URL-параметры и сохраняем в редакс
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            )
            isSearch.current = true;
        }
    }, [])

    //Если был первый рендер то запрашиваем пиццы
    useEffect(() => {
        window.scrollTo(0, 0)

        if (!isSearch.current) {
            fetchPizzas()
        }

        isSearch.current = false;
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

