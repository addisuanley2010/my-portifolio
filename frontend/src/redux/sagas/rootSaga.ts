import { all } from "redux-saga/effects";
import { watcUserSaga } from "./userSaga";
import { watcSkillSaga } from "./skillSaga";
import { watcProjectSaga } from "./projectSaga";
import { watchServiceSaga } from "./serviceSaga";
import { watcMessageSaga } from "./contactSaga";

export function* rootSaga() {
    yield all([
        watcUserSaga(),
        watcSkillSaga(),
        watcProjectSaga(),
        watchServiceSaga(),
        watcMessageSaga()
    ])
}