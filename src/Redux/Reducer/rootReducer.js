import {combineReducers} from "@reduxjs/toolkit";
import bestsellersSlice from "./bestsellersSlice";
import categoriesSlice from "./categoriesSlice";

const rootReducer = combineReducers({
    bestsellers:  bestsellersSlice,
    categories: categoriesSlice,
})

export default rootReducer;
