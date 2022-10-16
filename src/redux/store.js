
import {configureStore} from '@reduxjs/toolkit'
import visibleSlice from './VisibleSlice'

const store = configureStore({
    reducer:{
        visibleSlice:visibleSlice
    }
})
export default store