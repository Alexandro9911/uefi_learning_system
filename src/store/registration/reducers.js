import {
    REG_EMAIL_CHANGE,
    REG_PASSW_CHANGE,
    REG_REP_PASSW_CHANGE,
    SET_WHO_I_AM,
    SET_LAST_NAME,
    SET_MID_NAME,SET_NAME
} from "./actions";

const initialState = {
    name: "",
    last_name: "",
    middle_name: "",
    who_i_am: 0,
    email: "",
    password: "",
    repeatPassw :"",
}

export const registrationReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_WHO_I_AM:
            return {
                ...state,
                who_i_am: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_LAST_NAME:
            return {
                ...state,
                last_name: action.payload
            }
        case SET_MID_NAME:
            return {
                ...state,
                middle_name: action.payload
            }
        case REG_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            };
        case REG_PASSW_CHANGE:
            return {
                ...state,
                password: action.payload
            };
        case REG_REP_PASSW_CHANGE:
            return {
                ...state,
                repeatPassw: action.payload
            };
    }
    return state
}