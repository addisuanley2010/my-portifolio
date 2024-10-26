import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import axios from 'axios';

import MyToast from '../../utils/Toast';
import { ToastType } from '../../types/user.types';
import { loading, addContactToStore, getAllMessage } from '../features/contactSlice';


// ...................ADD Message...............................
export function* handleAddMessage(action: any) {


        yield put(loading(true))
        try {


                const name = action.payload.name
                const email = action.payload.email
                const phone = action.payload.phone
                const message = action.payload.message

                const formData = { name, email, phone, message }

                const response: CallableFunction = yield call(axios.post, `${api}/add-message`, formData);

                const { data } = yield (response as any).data
                yield put(addContactToStore(data));
                MyToast("message sent! thank you!", ToastType.SUCCESS);

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))


        }

}

// ...................Get  Messages.............................

export function* getMessages() {
        yield put(loading(true))

        try {
                const response: CallableFunction = yield call(axios.get, `${api}/get-messages`);
                const { data } = yield (response as any).data
                // MyToast(message, ToastType.SUCCESS);

                yield put(getAllMessage(data));

        } catch (error) {
                MyToast((error as any).response.data.message, ToastType.ERROR);
                yield put(loading(false))

        }

}

// ...................Delete  Messages.............................

// export function* deleteMessage(id: any) {
//         yield put(loading(true))

//         try {
//                 const response: CallableFunction = yield call(axios.delete, `${api}/delete-message/${id.id}`);
//                 const { message } = yield (response as any).data

//                 MyToast(message, ToastType.SUCCESS);
//                 yield put(deleteMessageFromStore(id));

//         } catch (error) {
//                 MyToast((error as any).response.data.message, ToastType.ERROR);
//                 yield put(loading(false))

//         }

// }

// ....................................... END OF SAGA ...................................
export function* watcMessageSaga() {
        yield takeEvery('ADD_MESSAGE', handleAddMessage);
        yield takeEvery('GET_MESSAGE', getMessages);
        // yield takeEvery('DELETE_MESSAGE', deleteMessage);





}