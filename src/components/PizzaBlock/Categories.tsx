import React from 'react';

type CategoriesType = {
    categoryId: number
    setCategoryId: (value: number) => void
}

export const Categories = ({categoryId, setCategoryId} : CategoriesType) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategoryHandler = (value: number) => {
        setCategoryId(value)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
                    <li key={index}
                        onClick={() => onClickCategoryHandler(index)}
                        className={categoryId === index ? "active" : ''}
                    >
                        {category}
                    </li>
                )}
            </ul>
        </div>
    );
};

