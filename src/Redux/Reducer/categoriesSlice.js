import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, {rejectWithValue })=>{
        try{
            const response = await fetch(process.env.REACT_APP_URL +'/categories');
            if(!response.ok){
                rejectWithValue('Страница не найдена');
            }
            return await response.json();
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
    )
const categoriesSlice = createSlice({
    name: 'categories',
    initialState:{
        categoriesList: [],
        activeCategory: 'all',
        loading: false,
        error: null,
    },
    reducers: {
        changeActiveCategory(state, action){
            state.activeCategory = action.payload
        }
    },
    extraReducers: {
        [fetchCategories.pending]: (state)=>{
            state.loading = true;
            state.error = null;
        },
        [fetchCategories.fulfilled]: (state, action)=>{
            state.loading = false;
            state.categoriesList = action.payload;

        },
        [fetchCategories.rejected]: (state, action)=>{
            state.loading = 'rejected';
            state.error = action.payload;
        },
    }

})

export const {changeActiveCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
