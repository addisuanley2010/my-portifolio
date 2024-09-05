import { configureStore } from "@reduxjs/toolkit";
import {inputReducer} from './redux/features/userSlice'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./redux/sagas/rootSaga";

const sagaMiddleware=createSagaMiddleware()




export const store =configureStore({
        reducer:{
                user:inputReducer
        },
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
