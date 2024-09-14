import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from './redux/features/userSlice'
import { skillReducer } from './redux/features/skillSlice'

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./redux/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()




export const store = configureStore({
        reducer: {
                user: userReducer,
                skill: skillReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
