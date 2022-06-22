import {combineReducers} from "@reduxjs/toolkit";
import bestsellersSlice from "./bestsellersSlice";
import categoriesSlice from "./categoriesSlice";
import catalogSlice from "./catalogSlice";
import searchSlice from "./searchSlice";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";
import orderSlice from "./orderSlice";


const rootReducer = combineReducers({
    bestsellers:  bestsellersSlice,
    categories: categoriesSlice,
    catalog: catalogSlice,
    search: searchSlice,
    product: productSlice,
    basket: basketSlice,
    order: orderSlice,
})

export default rootReducer;
