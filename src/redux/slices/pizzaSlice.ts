import {AnyAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {PizzaType, SortType} from "./filterSlice";
import axios from "axios";

export type PizzasType = {
    items: PizzaType[]
}

export const initialState: PizzasType = {
    items: []
}

// export const fetchPizzas = ({category, sortBy, searchBy, page} : any) => {
//     createAsyncThunk('pizza/fetchPizzasStatus',
//         async () => {
//             // узнай как выташить аргумнеты параметы
//             const {data} = await axios.get(
//                 `https://646e692e9c677e23218ba211.mockapi.io/items?category=${category}&title=${searchBy}&page=${page}&limit=4&sortBy=${sortBy}&order=desk`
//             )
//             return data
//         }
//     )
// }

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer