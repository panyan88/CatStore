import {combineReducers} from "redux";
import {productReducer, selectedProductReducer} from "./productReduser";

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;