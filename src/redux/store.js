import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"
import { RootReducer } from "./reducers/RootReducer";
import logger from 'redux-logger'
import cartCounter from "./middlewears/cartCounter";
import thunk from "redux-thunk";

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(
            cartCounter,
            // logger,
            thunk,
        ))
)
// const store = createStore(RootReducer, applyMiddleware(logger))

export default store;