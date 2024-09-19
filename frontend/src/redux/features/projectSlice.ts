import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProject } from "../../types/user.types";



interface InitialStateInterface {
        projectData: IProject[]
        loading: boolean
        status: boolean
}



const initialState: InitialStateInterface = {

        projectData: [{
                _id: 0,
                project_name: '',
                project_desc: '',
                tags: []

        }],
     
        loading: false,
        status: false,

};

const inputSlice = createSlice({
        name: 'project',
        initialState,
        reducers: {
                loading: (state, action: PayloadAction<boolean>) => {
                        state.status = false
                        state.loading = action.payload
                },
                addProjectToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.projectData.push(action.payload)
                },
                getAllProject: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.projectData = action.payload
                },
                deleteProjectFromStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.projectData = state.projectData.filter((data: IProject) => data._id !== action.payload)
                },
                updateProjectToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false;
                        state.status = true;
                        state.projectData = state.projectData.map((Project: IProject) =>
                                Project._id === action.payload._id ? action.payload : Project
                        );
                },





        }
})
export const { addProjectToStore, loading, deleteProjectFromStore, getAllProject, updateProjectToStore } = inputSlice.actions
export const projectReducer = inputSlice.reducer;