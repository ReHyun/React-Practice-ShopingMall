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
      let cartNum = state.findIndex((a)=>{return a.id == action.payload})
      state[cartNum].count++
    },
    AddCart(state, action){
      state.push(action.payload)
      console.log(action.payload)
    },
    DecreaseCount(state,action){
      let cartNum = state.findIndex((a)=>{return a.id == action.payload})
      state[cartNum].count -= 1
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