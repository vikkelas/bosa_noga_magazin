import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ({id}, {rejectWithValue })=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_URL}/items/${id}`);
            if(!response.ok){
                rejectWithValue('Товар не найден')
            }
            return await response.json();
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        product: null,
        images: [],
        sizes: [],
        error: null,
        activeSize: '',
        count: 0,
    },
    reducers:{
        countInc(state){
            state.count = ++state.count;
        },
        countDec(state){
            if(state.count>0)
            state.count = --state.count;
        },
        changeActiveSize(state, action){
            state.activeSize = action.payload;
        }
    },
    extraReducers: {
        [fetchProduct.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchProduct.fulfilled]: (state, action)=>{
            state.loading = false;
            state.product = action.payload;
            state.images = action.payload.images;
            state.sizes = action.payload.sizes;
        },
        [fetchProduct.rejected]: (state,action)=>{
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }
})

export const {countInc, countDec,changeActiveSize} = productSlice.actions;
export default productSlice.reducer;
