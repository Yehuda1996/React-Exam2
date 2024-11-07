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
        setRole: (state, action: PayloadAction<string>) => {
            const newRole = action.payload;
            if (roles.includes(newRole)){
                state.currentRole = newRole
            }
            else {
                console.error(`${newRole} is not an acceptable role `)
            }
        }
    }
})

export const { setRole } = roleReducerSlice.actions;
export default roleReducerSlice.reducer;