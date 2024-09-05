import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateInterface, IUser } from "../../types/user.types";




const initialState: InitialStateInterface = {
        userData: {
                _id: '',
                full_name: '',
                user_name: '',
                email: '',
                password: '',
                gender: '',
                phone: '',
                address: '',
                qualification: '',
                role: '',
                verified: false,
        },
        loading: false,
        message: '',
        status: false,
        token: ""

};

const inputSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
                loading: (state, action: PayloadAction<boolean>) => {
                        state.message = ''
                        state.token = ''
                        state.userData = initialState.userData
                        state.status = false
                        state.loading = action.payload
                        return state
                },
                addMessageToStore: (state, action: PayloadAction<string>) => {
                        state.loading = false
                        state.message = action.payload
                        return state
                },
                addUserToStore: (state, action: PayloadAction<IUser>) => {

                        state.userData = action.payload
                        state.loading = false
                        state.status = true
                        return state
                },
                addTokenToStore: (state, action: PayloadAction<IUser>) => {

                        state.token = action.payload.token
                        state.loading = false
                        state.status = true
                        return state
                },



        }
})
export const { addUserToStore, loading, addMessageToStore, addTokenToStore } = inputSlice.actions
export const inputReducer = inputSlice.reducer;