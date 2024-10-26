import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import MyToast from '../../utils/Toast';
import {  ToastType } from '../../types/user.types';
import {  addServiceToStore,loading, getAllService, deleteServiceFromStore, updateServiceToStore } from '../features/serviceSlice';


// ...................ADD service...............................
export function* handleAddService(action: any) {

        yield put(loading(true))
        try {


                const service_name = action.payload.service_name
                const service_description = action.payload.service_description


                const formData = { service_name, service_description }

                const response: CallableFunction = yield call(axios.post, `${api}/add-service`, formData);
                const { data, message } = yield (response as any).data
                yield put(addServiceToStore(data));
                MyToast(message, ToastType.SUCCESS);

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}
// ...................Get  services.............................

export function* getServices() {


        
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.get, `${api}/get-service`);
                const { data } = yield (response as any).data
                // MyToast("hello service", ToastType.SUCCESS);

                yield put(getAllService(data));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}
// ...................Update  services.............................

export function* updateService(action: any) {



        yield put(loading(true))
        try {

                const service_name = action.payload.service_name
                const service_description = action.payload.service_description
                const id = action.payload._id


                const formData = { service_name, service_description }

                const response: CallableFunction = yield call(axios.put, `${api}/update-service/${id}`, formData);
                const { data, message } = yield (response as any).data
                yield put(updateServiceToStore(data));
                MyToast(message, ToastType.SUCCESS);

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}
// ...................Delete  services.............................

export function* deleteService(action: {type:string,payload:string}) {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.delete, `${api}/delete-service/${action.payload}`);
                const { message } = yield (response as any).data

                MyToast(message, ToastType.SUCCESS);
                yield put(deleteServiceFromStore(action.payload));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}

// ....................................... END OF SAGA ...................................
export function* watchServiceSaga() {
        yield takeEvery('ADD_SERVICE', handleAddService);
        yield takeEvery('GET_SERVICE', getServices);
        yield takeEvery('UPDATE_SERVICE', updateService);
        yield takeEvery('DELETE_SERVICE', deleteService);





}