import { createSlice } from "@reduxjs/toolkit";

//name of action
//initial state
//reducer

const initialState = {
  count: 5,
};

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
      increment:(state)=>{
        state.count+=1
      },
      decrement:(state)=>{
        state.count-=1
      }
    }
})

export default counterSlice.reducer
export const {increment,decrement}=counterSlice.actions