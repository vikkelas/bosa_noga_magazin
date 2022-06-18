import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: false,
        searchValue: '',
        test: '',
    },
    reducers:{
        viewInput(state,action){
            state.searchValue = action.payload
        },
    }
})

export default searchSlice.reducer;
export const {viewInput} = searchSlice.actions;
