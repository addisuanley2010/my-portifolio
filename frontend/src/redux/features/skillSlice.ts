import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISkill } from '../../../../backend/src/interfaces/user.interface';




const initialState: any = {
        skillData: [{
                _id: '',
                skill_name: '',
                skill_percent: ''

        }],
        loading: false,
        status: false,

};

const inputSlice = createSlice({
        name: 'skill',
        initialState,
        reducers: {
                loading: (state, action: PayloadAction<boolean>) => {
                        state.status = false
                        state.loading = action.payload
                },
                addSkillToStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.skillData.push(action.payload)
                },
                  addSkillToStoreAll: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.skillData=action.payload
                },
                deleteSkillFromStore: (state, action: PayloadAction<any>) => {
                        state.loading = false
                        state.status = true
                        state.skillData = state.skillData.filter((data: ISkill) => data._id !== action.payload.id)
                },




        }
})
export const { addSkillToStore, loading, deleteSkillFromStore,addSkillToStoreAll } = inputSlice.actions
export const skillReducer = inputSlice.reducer;