import {SHOW_MODAL_CREATE_PRACTICE,HIDE_MODAL_CREATE_PRACTICE} from "./actions";
const initialState = {
    modal_practice: false
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
    }
    return state;
}