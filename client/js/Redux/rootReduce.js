import {combineReducers} from 'redux'
import {listReducer} from './listReducer'

import { createStore, applyMiddleware } from "redux"

import thunk from "redux-thunk";

const rootReduce = combineReducers({list : listReducer})
 export const store= createStore(rootReduce,applyMiddleware(thunk))