import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import MyToast from '../../utils/Toast';
import { ToastType } from '../../types/user.types';
import { addSkillToStore, addSkillToStoreAll, deleteSkillFromStore, loading } from '../features/skillSlice';


// ...................ADD Skill...............................
export function* handleAddSkill(action: any) {
        yield put(loading(true))
        try {


                const skill_name = action.myFormData.skill_name
                const skill_percent = action.myFormData.skill_percent
                const formData = { skill_name, skill_percent }

                const response: CallableFunction = yield call(axios.post, `${api}/add-skill`, formData);
                const { data, message } = yield (response as any).data
                yield put(addSkillToStore(data));
                MyToast(message, ToastType.SUCCESS);
                action.myFormData.myCallBack()

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}
// ...................Get  Skills.............................

export function* getSkills() {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.get, `${api}/get-skill`);
                const { data, message } = yield (response as any).data
                MyToast(message, ToastType.SUCCESS);

                yield put(addSkillToStoreAll(data));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}
export function* deleteSkill(id: any) {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.delete, `${api}/delete-skill/${id.id}`);
                const { message } = yield (response as any).data

                MyToast(message, ToastType.SUCCESS);
                yield put(deleteSkillFromStore(id));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}

// ....................................... END OF SAGA ...................................
export function* watcSkillSaga() {
        yield takeEvery('ADD_SKILL', handleAddSkill);
        yield takeEvery('GET_SKILL', getSkills);
        yield takeEvery('DELETE_SKILL', deleteSkill);




}