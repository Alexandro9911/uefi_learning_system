import {REG_EMAIL_CHANGE,REG_PASSW_CHANGE,REG_REP_PASSW_CHANGE} from "./actions";

const initialState = {
    email: "",
    password: "",
    repeatPassw :""
}

export const registrationReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
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