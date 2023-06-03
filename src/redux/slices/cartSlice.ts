import {createSlice} from '@reduxjs/toolkit'

export type PizzaType = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[]
    sizes: number[]
    price: number,
    category: number,
    rating: number,
    count: number
}

export interface FilterState {
    totalPrice: number,
    items: PizzaType[]
}

export const initialState: FilterState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     state.items.push(action.payload)
        //     state.totalPrice = state.items.reduce((sum, obj) => {
        //         return obj.price + sum
        //     }, 0)
        // },
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload, count: 1})
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearItems(state, action) {
            state.items = []
        }
    },
})

// Action creators are generated for each case reducer function
export const {addItem, removeItem, clearItems} = cartSlice.actions

export default cartSlice.reducer