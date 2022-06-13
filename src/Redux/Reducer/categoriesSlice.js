import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (_, {rejectWithValue })=>{
        try{
            const response = await fetch(process.env.REACT_APP_BESTSELLERS);
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
const categoriesSlice = createSlice({
    name: 'categories',
    initialState:{
        categoriesList: [],
        activeCategory: 'all',
    }
})

export default categoriesSlice.reducer;
