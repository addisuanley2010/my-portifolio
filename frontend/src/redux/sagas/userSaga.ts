import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import { addTokenToStore, addUserToStore, loading, addMessageToStore } from '../features/userSlice';
import MyToast from '../../utils/Toast';
import { ToastType } from '../../types/user.types';


// ...................ADD USER...............................
export function* handleAddUser(action: any) {
        yield put(loading(true))
        try {
                const response: CallableFunction = yield call(axios.post, `${api}/sign-up`, action);
                const { data, message } = yield (response as any).data
                yield put(addUserToStore(data));
                yield put(addMessageToStore(message));

        } catch (error) {
                yield put(addMessageToStore((error as any).message));

        }

}
// ...................USER LOGIN.............................

export function* handleLogin(action: any) {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.post, `${api}/sign-in`, action.formData);
                const { data, message } = yield (response as any).data
                MyToast(message, ToastType.SUCCESS);

                yield put(addTokenToStore(data));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}

// ....................................... END OF SAGA ...................................
export function* watcUserSaga() {
        yield takeEvery('CREATE_USER', handleAddUser);
        yield takeEvery('LOGIN', handleLogin);



}