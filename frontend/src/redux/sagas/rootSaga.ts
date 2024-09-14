import { all } from "redux-saga/effects";
import { watcUserSaga } from "./userSaga";
import { watcSkillSaga } from "./skillSaga";

export function* rootSaga() {
    yield all([
        watcUserSaga(),
        watcSkillSaga()
    ])
}