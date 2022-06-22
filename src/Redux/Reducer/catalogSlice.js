import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCatalog = createAsyncThunk(
    'catalog/fetchCatalog',
    async ({path}, {rejectWithValue })=>{
        try{
            const response = await fetch(process.env.REACT_APP_URL + path);
            if(!response.ok){
                return rejectWithValue('Страница не найдена');
            }
            return await response.json();
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
)
export const fetchReplenishmentCatalog = createAsyncThunk(
    'catalog/fetchReplenishmentCatalog',
    async ({path}, {rejectWithValue})=>{
        try{
            const response = await fetch(process.env.REACT_APP_URL + path);
            if(!response.ok){
               return rejectWithValue('Страница не найдена');
            }
            return await response.json();
        }
        catch (error){
            return rejectWithValue(error.message)
        }
}
)
const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        loading: false,
        products: [],
        serverEmpty: false,
        error: null,
    },
    reducers: {
        clearProducts(state){
            state.products = [];
        },
        searchProducts(state, action){
            state.loading = false;
            state.products = action.payload;
        },
        preloaderActive(state){
          state.loading = true;
        },
    },
    extraReducers:{
        [fetchCatalog.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchCatalog.fulfilled]: (state, action)=>{
            state.loading = false;
            state.products = action.payload
        },
        [fetchCatalog.rejected]: (state, action)=>{
            state.loading = 'rejected';
            state.error = action.payload
        },
        [fetchReplenishmentCatalog.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchReplenishmentCatalog.fulfilled]: (state, action)=>{
            state.loading = false;
            state.serverEmpty = false;
            if(action.payload.length>=6&&action.payload.length){
                state.products = [...state.products,...action.payload]
            }
            if(action.payload.length<6&&action.payload.length){
                state.products = [...state.products,...action.payload];
                state.serverEmpty = true;
            }
            if(!action.payload.length)
            state.serverEmpty = true
        },
        [fetchReplenishmentCatalog.rejected]: (state, action)=>{
            state.loading = 'rejected';
            state.error = action.payload
        }
     }
})
export const {clearProducts, searchProducts, preloaderActive} = catalogSlice.actions;
export default catalogSlice.reducer;
