import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchOrder = createAsyncThunk(
    'order/fetchOrder',
    async ({body}, {rejectWithValue })=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_URL}/order`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body),
            });
            if(!response.ok){
                rejectWithValue('Что то пошло не так...')
            }
        }
        catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        phone: '',
        checkBox: false,
        address: '',
        thanksPage: false,
    },
    reducers: {
        changePhone(state, action){
            state.phone = action.payload
        },
        changeAddress(state, action){
            state.address = action.payload
        },
        changeCheckBox(state, action){
            state.checkBox = action.payload
        },
        resetForm(state){
            state.phone = '';
            state.address='';
            state.checkBox = false;
        }
    },
    extraReducers: {
        [fetchOrder.pending]: (state)=>{
            state.loading = true;
        },
        [fetchOrder.fulfilled]: (state)=>{
            state.loading = false;
            state.thanksPage = true;
        }
    }
})

export const{changePhone, changeAddress, changeCheckBox, resetForm} = orderSlice.actions;
export default orderSlice.reducer;
