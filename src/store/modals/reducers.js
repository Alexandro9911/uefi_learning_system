import {SHOW_MODAL_CREATE_PRACTICE,
    HIDE_MODAL_CREATE_PRACTICE,
    SHOW_MODAL_DOWNLOADING,
    HIDE_MODAL_DOWNLOADING,
    SHOW_MODAL_TASKS,
    HIDE_MODAL_TASKS,
    SET_INDEX_GROUP
} from "./actions";
const initialState = {
    modal_practice: false,
    modal_downloading: false,
    modal_tasks: false,

    tasks_for_group: null
}

export const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_INDEX_GROUP:
            return {
                ...state,
                tasks_for_group: action.payload
            }
        case SHOW_MODAL_TASKS:
            return {
                ...state,
                modal_tasks: action.payload
            }
        case HIDE_MODAL_TASKS:
            return {
                ...state,
                modal_tasks: action.payload
            }
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