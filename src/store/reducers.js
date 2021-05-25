import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {groupCreateReducer, listGroupReducer} from "./groups/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    groupcreate: groupCreateReducer,
    listgroups: listGroupReducer
})