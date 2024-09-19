import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import MyToast from '../../utils/Toast';
import {  ToastType } from '../../types/user.types';
import {  addProjectToStore, getAllProject, deleteProjectFromStore, loading, updateProjectToStore } from '../features/projectSlice';


// ...................ADD Project...............................
export function* handleAddProject(action: any) {


        yield put(loading(true))
        try {


                const project_name = action.payload.project_name
                const project_desc = action.payload.project_desc
                const tags = action.payload.tags


                const formData = { project_name, project_desc, tags }

                const response: CallableFunction = yield call(axios.post, `${api}/add-project`, formData);
                const { data, message } = yield (response as any).data
                yield put(addProjectToStore(data));
                MyToast(message, ToastType.SUCCESS);

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}
// ...................Get  Projects.............................

export function* getProjects() {


        
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.get, `${api}/get-project`);
                const { data, message } = yield (response as any).data
                MyToast(message, ToastType.SUCCESS);

                yield put(getAllProject(data));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}
// ...................Update  Projects.............................

export function* upDateProject(action: any) {



        yield put(loading(true))
        try {

                const project_name = action.payload.project_name
                const project_desc = action.payload.project_desc
                const tags = action.payload.tags
                const id = action.payload._id


                const formData = { project_name, project_desc, tags }

                const response: CallableFunction = yield call(axios.put, `${api}/update-project/${id}`, formData);
                const { data, message } = yield (response as any).data
                yield put(updateProjectToStore(data));
                MyToast(message, ToastType.SUCCESS);

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}
// ...................Delete  Projects.............................

export function* deleteProject(action: {type:string,payload:string}) {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.delete, `${api}/delete-project/${action.payload}`);
                const { message } = yield (response as any).data

                MyToast(message, ToastType.SUCCESS);
                yield put(deleteProjectFromStore(action.payload));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}

// ....................................... END OF SAGA ...................................
export function* watcProjectSaga() {
        yield takeEvery('ADD_PROJECT', handleAddProject);
        yield takeEvery('GET_PROJECT', getProjects);
        yield takeEvery('UPDATE_PROJECT', upDateProject);
        yield takeEvery('DELETE_PROJECT', deleteProject);





}