import {ActionTypes} from '../constants/action-types';

const InitialState = {
    products: [],
    categories: [],
}

export const productReducer = (state = InitialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        case ActionTypes.SET_CATEGORIES:
            return {...state, categories:payload};
        default:
            return state;
    }
}