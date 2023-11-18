import { combineReducers } from "redux"
import ProductReducer from "./ProductReducer"
import { FilterReducer } from "./FilterReducer"

export const RootReducer = combineReducers({
    product: ProductReducer,
    filter: FilterReducer
})