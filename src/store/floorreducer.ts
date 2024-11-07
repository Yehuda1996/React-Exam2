//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorReducerStateType {
    access: [boolean, boolean, boolean, boolean, boolean]
}

const initialState: FloorReducerStateType = {
    access: [false, false, false, false, false]
}

export const floorReducerSlice = createSlice({
    initialState, 
    name: 'floors',
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            const floorIndex = action.payload;
            if (floorIndex >= 0 && floorIndex < state.access.length){
                state.access[floorIndex]  != state.access[floorIndex]
            }
        }
    }
})

export const { changeAccess } = floorReducerSlice.actions;
export default floorReducerSlice.reducer;