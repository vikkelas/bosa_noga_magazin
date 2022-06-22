import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketProducts: [],
    },
    reducers: {
        addProductBasket(state, action){
            if(!state.basketProducts){
                state.basketProducts = [...state.basketProducts, action.payload]
            }
            if(state.basketProducts){
                const{count, order} = action.payload;
                const index = state.basketProducts.find(item=>item.order===order);
                if(!index){
                    state.basketProducts = [...state.basketProducts, action.payload];
                }
                if(index){
                    state.basketProducts = state.basketProducts.map(item=>{
                        if(item.order===order){
                            item.count += count;
                            return item;
                        }
                        else {
                            return item;
                        }
                    })
                }
            }
        },
        deleteProductBasket(state, action){
           state.basketProducts = state.basketProducts.filter(item=>item.order!==action.payload)
        },
        resetBasket(state){
            state.basketProducts = [];
        }
    }
})
export const {addProductBasket, deleteProductBasket, resetBasket} = basketSlice.actions;
export default  basketSlice.reducer;
