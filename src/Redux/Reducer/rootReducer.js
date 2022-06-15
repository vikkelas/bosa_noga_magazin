import {combineReducers} from "@reduxjs/toolkit";
import bestsellersSlice from "./bestsellersSlice";
import categoriesSlice from "./categoriesSlice";
import catalogSlice from "./catalogSlice";

const rootReducer = combineReducers({
    bestsellers:  bestsellersSlice,
    categories: categoriesSlice,
    catalog: catalogSlice,
})

export default rootReducer;
