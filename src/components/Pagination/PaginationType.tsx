import React from 'react';
import ReactPaginate from "react-paginate";
import s from './Pagination.module.scss'
import {setCurrentPage} from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Pagination = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state: RootState) => state.filter.currentPage)


    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }

    return (
        <ReactPaginate
            className={s.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    );
};

