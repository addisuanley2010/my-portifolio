import { all } from "redux-saga/effects";
import { watcUserSaga } from "./userSaga";
import { watcSkillSaga } from "./skillSaga";
import { watcProjectSaga } from "./projectSaga";

export function* rootSaga() {
    yield all([
        watcUserSaga(),
        watcSkillSaga(),
        watcProjectSaga(),
    ])
}