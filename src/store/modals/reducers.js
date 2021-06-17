import {SHOW_MODAL_CREATE_PRACTICE,
    HIDE_MODAL_CREATE_PRACTICE,
    SHOW_MODAL_DOWNLOADING,
    HIDE_MODAL_DOWNLOADING,
    SHOW_MODAL_TASKS,
    HIDE_MODAL_TASKS,
    SET_INDEX_GROUP,
    SHOW_ALERT_MODAL,
    HIDE_ALERT_MODAL,
    ACTION_TEACHER_TEST_MODAL,
    ACTION_WARNING_MODAL,
    SET_TEXT_WARNING_MODAL
} from "./actions";
const initialState = {
    modal_practice: false,
    modal_downloading: false,
    modal_tasks: false,

    tasks_for_group: null,

    modal_alert: false,

    modal_test_results: false,


    warning_modal: false,
    warning_modal_text: ''
}

export const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTION_WARNING_MODAL:
            return {
                ...state,
                warning_modal: action.payload
            }
        case SET_TEXT_WARNING_MODAL:
            return  {
                ...state,
                warning_modal_text: action.payload
            }
        case ACTION_TEACHER_TEST_MODAL:
            return {
                ...state,
                modal_test_results: action.payload
            }
        case SHOW_ALERT_MODAL:
            return {
                ...state,
                modal_alert: action.payload
            }
        case HIDE_ALERT_MODAL:
            return {
                ...state,
                modal_alert: action.payload
            }
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