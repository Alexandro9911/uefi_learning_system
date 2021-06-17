import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {groupCreateReducer, listGroupReducer} from "./groups/reducers";
import {userActivityReducer} from "./userpage/reducers";
import {modalReducer} from "./modals/reducers";
import {practiceCreateReducer} from "./practiceCreate/reducers";
import {createEmulatorReducer} from "./emulatorCreate/reducers";
import {practiceGroupReducer} from "./groupspractice/reducers";
import {studentsPracticeReducer} from "./practice_student/reducers";
import {emulatorRegucer} from "./emulator/reducers";
import {emulatorModalReducer} from "./emulatorModals/reducers";
import {teacherTestReducer} from "./teacherTests/reducers";
import {studentTestReducer} from "./studentTests/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    groupcreate: groupCreateReducer,
    listgroups: listGroupReducer,
    useractivity: userActivityReducer,
    modals: modalReducer,
    practiceform: practiceCreateReducer,
    emulatorform: createEmulatorReducer,
    practicepage: practiceGroupReducer,
    studentpractice: studentsPracticeReducer,
    emulator: emulatorRegucer,
    emulatormodals: emulatorModalReducer,
    teachertest:  teacherTestReducer,
    studenttest: studentTestReducer
})