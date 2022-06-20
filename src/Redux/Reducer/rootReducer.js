import {combineReducers} from "@reduxjs/toolkit";
import bestsellersSlice from "./bestsellersSlice";
import categoriesSlice from "./categoriesSlice";
import catalogSlice from "./catalogSlice";
import searchSlice from "./searchSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
    bestsellers:  bestsellersSlice,
    categories: categoriesSlice,
    catalog: catalogSlice,
    search: searchSlice,
    product: productSlice,
})

export default rootReducer;
