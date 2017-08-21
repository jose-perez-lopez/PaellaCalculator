import { combineReducers } from 'redux';

import {IngredientReducer} from './'

const appReducer = combineReducers({
    ingredient: IngredientReducer
})

const rootReducer = (state, action) => appReducer(state, action);


export {rootReducer};