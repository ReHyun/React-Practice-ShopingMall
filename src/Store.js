import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice.js'





let cart = createSlice({
  name : 'cart',
  initialState :[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] ,
  reducers : {
    IncreaseCount(state, action){
      state[action.payload].count += 1
    },
    AddCart(state, action){
      state.push(action.payload)
      console.log(action.payload)
    },
    DecreaseCount(state,action){
      state[action.payload].count -= 1
    }
  }
})

export let {IncreaseCount, DecreaseCount} = cart.actions
export let {AddCart} = cart.actions

export default configureStore({
  reducer: {
    cart : cart.reducer,
    user : user.reducer
   }
}) 