import { all } from "redux-saga/effects";
import { watcMusicSaga } from "./userSaga";

export function* rootSaga() {
    yield all([
        watcMusicSaga()
    ])
}