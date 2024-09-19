import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './redux/features/userSlice'
import { skillReducer } from './redux/features/skillSlice'

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./redux/sagas/rootSaga";
import { projectReducer } from "./redux/features/projectSlice";

const sagaMiddleware = createSagaMiddleware()




export const store = configureStore({
        reducer: {
                user: userReducer,
                skill: skillReducer,
                project:projectReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
