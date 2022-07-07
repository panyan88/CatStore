import {ActionTypes} from '../constants/action-types';

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const setCategories = (categories) => {
    return {
        type:ActionTypes.SET_CATEGORIES,
        payload: categories,
    }
}