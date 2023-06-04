import {createSlice} from '@reduxjs/toolkit'

export type SortType = {
    name: string;
    sortProperty: string;
}

export type PizzaType = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[]
    sizes: number[]
    price: number,
    category: number,
    rating: number,
}

export type FilterState = {
    categoryId: number,
    currentPage: number,
    isLoading: boolean
    searchValue: string,
    sort: SortType,
    items: PizzaType[],
}

export const initialState: FilterState = {
    categoryId: 0,
    currentPage: 1,
    isLoading: false,
    searchValue: '',
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
    items: [{
        id: 0,
        imageUrl: '',
        title: '',
        types: [],
        sizes: [],
        price: 0,
        category: 0,
        rating: 0,
    }]
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setFilters(state, action) {
            state.currentPage = Number(action.payload.currentPage)
            state.categoryId = Number(action.payload.categoryId)
            state.sort = action.payload.sort
        }

    },
})

// Action creators are generated for each case reducer function
export const {setCategoryId, setCurrentPage, setIsLoading, setSearchValue, setSort, setFilters} = filterSlice.actions

export default filterSlice.reducer