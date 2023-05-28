import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setCategoryId} from "../../redux/slices/filterSlice";

export const Categories = () => {

    const dispatch = useDispatch()
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
                    <li key={index}
                        onClick={() => onChangeCategory(index)}
                        className={categoryId === index ? "active" : ''}
                    >
                        {category}
                    </li>
                )}
            </ul>
        </div>
    );
};

