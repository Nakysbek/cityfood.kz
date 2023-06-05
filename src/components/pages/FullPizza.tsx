import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {PizzaType} from "../../redux/slices/filterSlice";

export const FullPizza = () => {
    const {id} = useParams()
    const [pizza, setPizza] = useState<PizzaType>()

    useEffect(() => {
            async function fetchPizza() {
                try {
                    const {data} = await axios.get(`https://646e692e9c677e23218ba211.mockapi.io/items/${id}`)
                    setPizza(data)
                } catch (e) {
                    console.log('error: ', e)
                }
            }

            fetchPizza()
    }, [])

    if (!pizza) {
        return <div className='container'>'Загрузка...'</div>
    }

    return (
        <div className='container'>
            <img src={pizza.imageUrl} alt={pizza?.title}/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} тг</h4>
        </div>
    );
};

