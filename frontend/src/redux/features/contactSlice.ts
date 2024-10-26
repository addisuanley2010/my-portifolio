import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: any = {
        contactData: [{
                _id: '',
                name: '',
                email: '',
                phone: '',
                message: ''

        }],
        loading: false,
        status: false,

};


const inputSlice = createSlice({
        name: 'contact',
        initialState,
        reducers: {
                loading: (state, action: PayloadAction<boolean>) => {
                        state.status = false
                        state.loading = action.payload
                },
                addContactToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.contactData.push(action.payload)
                },
                getAllMessage: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.contactData = action.payload
                },
                deleteMessageFromStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.contactData = state.contactData.filter((data: any) => data._id !== action.payload.id)
                },
                updateMessageToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false;
                        state.status = true;
                        state.contactData = state.contactData.map((message: any) =>
                                message._id === action.payload._id ? action.payload : message
                        );
                },





        }
})
export const { addContactToStore, loading, deleteMessageFromStore, updateMessageToStore, getAllMessage } = inputSlice.actions
export const contactReducer = inputSlice.reducer;