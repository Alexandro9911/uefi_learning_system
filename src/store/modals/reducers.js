import {SHOW_MODAL_CREATE_PRACTICE,
    HIDE_MODAL_CREATE_PRACTICE,
    SHOW_MODAL_DOWNLOADING,
    HIDE_MODAL_DOWNLOADING
} from "./actions";
const initialState = {
    modal_practice: false,
    modal_downloading: false,
}

export const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_CREATE_PRACTICE:
            return {
                ...state,
                modal_practice: action.payload
            }
        case HIDE_MODAL_CREATE_PRACTICE:
            return {
                ...state,
                modal_practice: action.payload
            }
        case SHOW_MODAL_DOWNLOADING:
            return {
                ...state,
                modal_downloading: action.payload
            }
        case HIDE_MODAL_DOWNLOADING:
            return {
                ...state,
                modal_downloading: action.payload
            }
    }
    return state;
}