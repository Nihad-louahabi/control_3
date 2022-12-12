import UserReducer from './UserSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import TodoReducer from "./TodoSlice";


const reducer = combineReducers({
    user: UserReducer,
    todo:TodoReducer,
    
})
const store = configureStore({reducer})

export default store;
