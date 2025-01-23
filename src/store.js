import {configureStore, createSlice} from '@reduxjs/toolkit';

// createSlice == useState 역할이랑 똑같음 

let userName = createSlice({
  name : 'userName',
  initialState : ['kim', 'lee', 'park']
})

let productStock = createSlice({
  name : 'productStock' ,
  initialState : [11,8,2]
})

let CartData = createSlice({
  name : 'CartData',
  initialState : [
  { id:0, title: 'White and Black', count : 2},
  { id:1, title: 'Grey Yordan', count : 1},
]
})


export default configureStore({
  reducer : {
    userName : userName.reducer,
    productStock : productStock.reducer,
    cartData : CartData.reducer,
  }
})
