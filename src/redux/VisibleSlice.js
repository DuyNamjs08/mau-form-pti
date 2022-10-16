import {createSlice} from '@reduxjs/toolkit'


const visibleSlice = createSlice({
    name:'visible',
    initialState:{
        visible:false
    },
    reducers:{
        visible:(state,action)=>{
              state.visible = action.payload
        },
        hidden:(state,action)=>{
              state.visible = action.payload
        }
    }
})
const {reducer , actions} = visibleSlice
export const {visible, hidden} = actions
export default reducer