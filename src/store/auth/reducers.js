import {AUTH_EMAIL_CHANGE, AUTH_PASSW_CHANGE, AUTH_SUCCESS,AUTH_BAD} from "./actions";

const initialState = {
    email: "",
    password: "",
    fio: "",
    id: "",
    auth: false,
    link: ''
}

export const authReducer = (state=initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case AUTH_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            };
        case AUTH_PASSW_CHANGE:
            return {
                ...state,
                password: action.payload
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                fio: action.payload.fio,
                id: action.payload.id,
                auth: true,
                link: action.payload.link
            };
        case AUTH_BAD:
            return {
                ...state,
                auth: false
            };
    }
    return state
}