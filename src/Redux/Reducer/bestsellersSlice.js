import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchBestsellers = createAsyncThunk(
    'bestsellers/fetchBestsellersProducts',
    async (_, {rejectWithValue })=>{
        try{
            const response = await fetch(process.env.REACT_APP_URL+'/top-sales');
            if(!response.ok){
                throw new Error('Страница не найдена')
            }
            const data = await response.json();
            return data;
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
)
const bestsellersSlice = createSlice({
    name: 'bestsellers',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchBestsellers.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchBestsellers.fulfilled]: (state, action)=>{
            state.loading = false;
            state.products = action.payload;

        },
        [fetchBestsellers.rejected]: (state, action)=>{
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }
})
export default  bestsellersSlice.reducer;
