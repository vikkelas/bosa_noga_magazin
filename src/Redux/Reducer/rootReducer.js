import {combineReducers} from "@reduxjs/toolkit";
import bestsellersSlice from "./bestsellersSlice";
import categoriesSlice from "./categoriesSlice";
import catalogSlice from "./catalogSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
    bestsellers:  bestsellersSlice,
    categories: categoriesSlice,
    catalog: catalogSlice,
    search: searchSlice,
})

export default rootReducer;
