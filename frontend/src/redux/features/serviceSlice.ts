import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IService } from "../../types/user.types";



interface InitialStateInterface {
        serviceData: IService[]
        loading: boolean
        status: boolean
}



const initialState: InitialStateInterface = {

        serviceData: [{
                _id: 0,
                service_name: '',
                service_description: '',
        }],
     
        loading: false,
        status: false,

};

const inputSlice = createSlice({
        name: 'service',
        initialState,
        reducers: {
                loading: (state, action: PayloadAction<boolean>) => {
                        state.status = false
                        state.loading = action.payload
                },
                addServiceToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.serviceData.push(action.payload)
                },
                getAllService: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.serviceData = action.payload
                },
                deleteServiceFromStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.serviceData = state.serviceData.filter((data: IService) => data._id !== action.payload)
                },
                updateServiceToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false;
                        state.status = true;
                        state.serviceData = state.serviceData.map((service: IService) =>
                                service._id === action.payload._id ? action.payload : service
                        );
                },





        }
})
export const { addServiceToStore, loading, deleteServiceFromStore, getAllService, updateServiceToStore } = inputSlice.actions
export const serviceReducer = inputSlice.reducer;