import React from 'react';
import s from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={s.root}>
            <span>😔</span>
            <br/>
            <h1>
                Ничего не найдено :(
            </h1>

            <p className={s.description}>
                К сожалению данная страница отсутствует в нашем сайте
            </p>
        </div>
    );
};

