import React from 'react';
import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss'

type PaginationType = {
    currentPage: number
    setCurrentPage: (value: number) => void;
}

export const Pagination = ({currentPage, setCurrentPage}: PaginationType) => {
    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => setCurrentPage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    );
};

