//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorReducerStateType {
    floorAccess: boolean[]
}

const initialState: FloorReducerStateType = {
    floorAccess: [false, false, false, false, false]
}

export const floorReducerSlice = createSlice({
    initialState, 
    name: 'floorAccess',
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            const floorIndex = action.payload;
            if (floorIndex >= 0 && floorIndex < state.floorAccess.length){
                state.floorAccess[floorIndex] = !state.floorAccess[floorIndex]
            }
        }
    }
})

export const { changeAccess } = floorReducerSlice.actions;
export default floorReducerSlice.reducer; 