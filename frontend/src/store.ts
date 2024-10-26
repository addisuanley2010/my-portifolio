import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './redux/features/userSlice'
import { skillReducer } from './redux/features/skillSlice'

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./redux/sagas/rootSaga";
import { projectReducer } from "./redux/features/projectSlice";
import { serviceReducer } from "./redux/features/serviceSlice";
import { contactReducer } from "./redux/features/contactSlice";

const sagaMiddleware = createSagaMiddleware()




export const store = configureStore({
        reducer: {
                user: userReducer,
                skill: skillReducer,
                project:projectReducer,
                service:serviceReducer,
                message:contactReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
