import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import { addTokenToStore, addUserToStore, loading, addMessageToStore } from '../features/userSlice';


// ...................ADD MUSIC...............................
export function* handleAddUser(action: any) {
        yield put(loading(true))
        try {
                const response: CallableFunction = yield call(axios.post, `${api}/sign-up`, action);//{ title, album, gener, artist }
                const { data, message } = yield response.data
                yield put(addUserToStore(data));
                yield put(addMessageToStore(message));

        } catch (error) {
                // yield put(message(error.response.data.message));
                yield put(addMessageToStore(error.message));

        }

}

export function* handleLogin(action: any) {
        yield put(loading(true))
        try {
                const response: CallableFunction = yield call(axios.post, `${api}/sign-in`, action.formData);//{ title, album, gener, artist }
                const { data, message } = yield response.data

                yield put(addMessageToStore(message));
                yield put(addTokenToStore(data));

        } catch (error) {
                // yield put(message(error.response.data.message));
                yield put(addMessageToStore(error.message));

        }

}

// ....................................... END OF SAGA ...................................
export function* watcMusicSaga() {
        yield takeEvery('CREATE_USER', handleAddUser);
        yield takeEvery('LOGIN', handleLogin);



}