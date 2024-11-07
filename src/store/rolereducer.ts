//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from '../data/roles.json'

interface RoleReducerStateType {
    currentRole: string
}

const initialState: RoleReducerStateType = {
    currentRole: roles[0] 
}

export const roleReducerSlice = createSlice({
    initialState,
    name: 'role',
    reducers: {
        setRole: (state, action: PayloadAction<number>) => {
            const roleIndex = action.payload;
            if (roleIndex >= 0 && roleIndex < roles.length) {
                state.currentRole = roles[roleIndex]; 
            } else {
                console.error(`${roleIndex} is not a valid role index`);
            }
        }
    }
})

export const { setRole } = roleReducerSlice.actions;
export default roleReducerSlice.reducer;